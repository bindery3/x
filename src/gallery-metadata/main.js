"use strict";

const ready = require("../ready");
const pageType = require("../api/page-type");
const windowMessage = require("../window-message");
const getFromHtml = require("../api/gallery-info/get-from-html");
const queryString = require("../query-string");
const GalleryIdentifier = require("../api/gallery-identifier").GalleryIdentifier;
const toCommonJson = require("../api/gallery-info/common-json").toCommonJson;

let downloadDataUrl = null;


function setupGalleryPage() {
	createGalleryPageDownloadLink();

	windowMessage.registerCommand("galleryInfoRequest", (e) => {
		const data = getFromHtml(document, window.location.href);
		if (data === null) { return; }
		windowMessage.post(e.source, "galleryInfoResponse", toCommonJson(data));
	});
}

function createGalleryPageDownloadLink() {
	const galleryRightSidebar = require("../api/gallery-right-sidebar");
	const link = galleryRightSidebar.createLink("Metadata JSON", 0).link;
	if (link === null) { return; }

	const info = getGalleryInfo();
	if (info === null) { return; }
	const filename = info.titleOriginal + " [" + info.identifier.id.toString() + "].json";

	link.setAttribute("download", filename);
	link.href = "#";

	link.addEventListener("click", onDownloadLinkClicked, false);
	link.addEventListener("auxclick", onDownloadLinkClicked, false);
}

function getGalleryInfo() {
	try {
		return getFromHtml(document, window.location.href);
	} catch (e) {
		console.error(e);
		return null;
	}
}

function createDownloadDataUrl(info) {
	const infoString = JSON.stringify(info, null, "  ");
	const blob = new Blob([infoString], { type: "application/json" });
	return URL.createObjectURL(blob);
}

function onDownloadLinkClicked(e) {
	/* jshint -W040 */
	if (downloadDataUrl === null) {
		const info = getGalleryInfo();
		if (info === null) {
			console.error("Failed to create download data");
			e.preventDefault();
			e.stopPropagation();
			return false;
		}

		downloadDataUrl = createDownloadDataUrl(toCommonJson(info));
		this.setAttribute("href", downloadDataUrl);
	}
	/* jshint +W040 */
}


function setupTorrentPage() {
	if (!window.opener) { return; }

	const identifier = getGalleryIdentifierFromTorrentPageUrl(window.location.href);
	if (identifier === null) { return; }

	windowMessage.registerCommand("galleryInfoResponse", (e, info) => {
		if (downloadDataUrl !== null || !isValidInfo(info, identifier)) { return; }
		downloadDataUrl = createDownloadDataUrl(info);
		createTorrentPageDownloadLinks(downloadDataUrl);
	});
	windowMessage.post(window.opener, "galleryInfoRequest");
}

function getGalleryIdentifierFromTorrentPageUrl(url) {
	const params = queryString.getUrlParameters(url);
	if (!params.hasOwnProperty("gid") || !params.hasOwnProperty("t")) { return null; }

	const id = parseInt(params.gid, 10);
	if (Number.isNaN(id)) { return null; }

	return new GalleryIdentifier(id, params.t);
}

function isValidInfo(info, identifier) {
	const g = info.gallery;
	return (
		g !== null && typeof (g) === "object" &&
		g.gid === identifier.id &&
		g.token === identifier.token);
}

function createTorrentPageDownloadLinks(url) {
	const tables = document.querySelectorAll("#torrentinfo form table>tbody");
	for (const table of tables) {
		const torrentLink = table.querySelector("tr:nth-of-type(3)>td");
		if (torrentLink === null) { continue; }

		const text = torrentLink.textContent;
		const whitespace = /^\s*/.exec(text)[0];
		const torrentFileName = text.trim().replace(/\.[^\.]*$/, "");

		const row = document.createElement("tr");

		const cell = document.createElement("td");
		cell.setAttribute("colspan", "5");

		if (whitespace.length > 0) {
			cell.appendChild(document.createTextNode(whitespace));
		}

		const link = document.createElement("a");
		link.setAttribute("download", `${torrentFileName}.info.json`);
		link.href = url;
		link.textContent = "Metadata JSON";
		cell.appendChild(link);

		row.appendChild(cell);
		table.appendChild(row);
	}
}


function main() {
	const currentPageType = pageType.get(document, location);

	switch (currentPageType) {
		case "gallery":
			setupGalleryPage();
			break;
		case "torrentInfo":
			setupTorrentPage();
			break;
	}
}


ready.onReady(main);
