// ==UserScript==
// @name        x/gallery-metadata
// @version     1.2.4
// @author      dnsev-h
// @namespace   dnsev-h
// @description Download metadata JSON files for galleries
// @run-at      document-start
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-metadata.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-metadata.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

class GalleryIdentifier {
	constructor(id, token) {
		this.id = id;
		this.token = token;
	}

	static createFromUrl(url) {
		const match = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/.exec(url);
		if (match === null) { return null; }

		const path = match[1].replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/").split("/");
		if (path[0] !== "g" || path.length < 3) { return null; }

		const id = parseInt(path[1], 10);
		return (Number.isNaN(id) ? null : new GalleryIdentifier(id, path[2]));
	}
}


module.exports = {
	GalleryIdentifier
};

},{}],2:[function(require,module,exports){
"use strict";

const GalleryIdentifier = require("../gallery-identifier").GalleryIdentifier;


function toStringOrDefault(value, defaultValue) {
	return typeof(value) === "string" ? value : defaultValue;
}

function toNumberOrDefault(value, defaultValue) {
	return Number.isNaN(value) ? defaultValue : value;
}

function galleryIdentifiertoCommonJson(identifier, defaultValue) {
	if (identifier === null || typeof(identifier) !== "object") {
		return defaultValue;
	}

	return {
		gid: identifier.id,
		token: identifier.token
	};
}

function newerVersionsToCommonJson(newerVersions) {
	const result = [];
	if (Array.isArray(newerVersions)) {
		for (const newerVersion of newerVersions) {
			result.push({
				gallery: (
					galleryIdentifiertoCommonJson(newerVersion.identifier, null) ||
					galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
				name: toStringOrDefault(newerVersion.name),
				date_uploaded: toNumberOrDefault(newerVersion.dateUploaded)
			});
		}
	}
	return result;
}

function tagsToCommonJson(tags) {
	const result = {};
	if (tags !== null && typeof(tags) === "object" && !Array.isArray(tags)) {
		for (const namespace in tags) {
			if (!Object.prototype.hasOwnProperty.call(tags, namespace)) { continue; }
			const tagList = tags[namespace];
			result[namespace] = [...tagList];
		}
	}
	return result;
}

function toCommonFavoriteCategory(info) {
	if (info.favoriteCategory === null) { return null; }
	return {
		id: toNumberOrDefault(info.favoriteCategory.index, 0),
		title: toStringOrDefault(info.favoriteCategory.title, "")
	};
}


function toCommonFullGalleryInfoJson(info) {
	return {
		gallery: (
			galleryIdentifiertoCommonJson(info.identifier, null) ||
			galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
		title: toStringOrDefault(info.title, ""),
		title_original: toStringOrDefault(info.titleOriginal, ""),
		date_uploaded: toNumberOrDefault(info.dateUploaded, 0),
		category: toStringOrDefault(info.category, ""),
		uploader: toStringOrDefault(info.uploader, ""),
		rating: {
			average: toNumberOrDefault(info.ratingAverage, 0),
			count: toNumberOrDefault(info.ratingCount, 0),
		},
		favorites: {
			category: (info.favoriteCategory !== null ? toNumberOrDefault(info.favoriteCategory.index, -1) : -1),
			category_title: (info.favoriteCategory !== null ? toStringOrDefault(info.favoriteCategory.title, "") : ""),
			count: toNumberOrDefault(info.favoriteCount, 0)
		},
		parent: galleryIdentifiertoCommonJson(info.parent, null),
		newer_versions: newerVersionsToCommonJson(info.newerVersions),
		thumbnail: toStringOrDefault(info.mainThumbnailUrl, ""),
		thumbnail_size: toStringOrDefault(info.thumbnailSize, ""),
		thumbnail_rows: toNumberOrDefault(info.thumbnailRows, 0),
		image_count: toNumberOrDefault(info.fileCount, 0),
		images_resized: false,
		total_file_size_approx: toNumberOrDefault(info.approximateTotalFileSize, 0),
		visible: (info.visible === true),
		visible_reason: toStringOrDefault(info.visibleReason, ""),
		language: toStringOrDefault(info.language, ""),
		translated: (info.translated === true),
		tags: tagsToCommonJson(info.tags),
		// New
		tags_have_namespace: (info.tagsHaveNamespace === true),
		torrent_count: toNumberOrDefault(info.torrentCount, 0),
		archiver_key: toStringOrDefault(info.archiverKey, null),
		source: toStringOrDefault(info.source, null),
		source_site: toStringOrDefault(info.sourceSite, null),
		date_generated: toNumberOrDefault(info.dateGenerated, 0)
	};
}

function toCommonGalleryInfoJson(info) {
	const date = new Date(toNumberOrDefault(info.dateUploaded, 0));
	return {
		title: toStringOrDefault(info.title, ""),
		title_original: toStringOrDefault(info.titleOriginal, ""),

		category: toStringOrDefault(info.category, ""),
		tags: tagsToCommonJson(info.tags),

		language: toStringOrDefault(info.language, ""),
		translated: !!info.translated,

		favorite_category: toCommonFavoriteCategory(info),

		upload_date: [
			date.getUTCFullYear(),
			date.getUTCMonth() + 1,
			date.getUTCDate(),
			date.getUTCHours(),
			date.getUTCMinutes(),
			date.getUTCSeconds()
		],

		source: {
			site: toStringOrDefault(info.sourceSite, ""),
			gid: (info.identifier !== null ? toNumberOrDefault(info.identifier.id, 0) : 0),
			token: (info.identifier !== null ? toStringOrDefault(info.identifier.token, 0) : 0),
			parent_gallery: galleryIdentifiertoCommonJson(info.parent, null),
			newer_versions: newerVersionsToCommonJson(info.newerVersions)
		}
	};
}

function toCommonJson(info) {
	return {
		gallery_info: toCommonGalleryInfoJson(info),
		gallery_info_full: toCommonFullGalleryInfoJson(info)
	};
}


module.exports = {
	toCommonJson
};

},{"../gallery-identifier":1}],3:[function(require,module,exports){
"use strict";

const types = require("./types");
const utils = require("./utils");


function getCssUrl(urlString) {
	const pattern = /url\s*\(\s*(['"])?/;
	const match = pattern.exec(urlString);
	if (match === null) { return null; }

	const quote = match[1] || "";
	urlString = urlString.substr(match.index + match[0].length - quote.length);

	const pattern2 = new RegExp(`(${quote})\\s*\\)\\s*$`);
	const match2 = pattern2.exec(urlString);
	if (match2 === null) { return null; }

	const url = urlString.substr(0, match2.index + match2[1].length);

	let url2 = url;
	if (!quote) {
		url2 = url.replace(/"/g, "\\\"");
		url2 = `"${url2}"`;
	} else if (quote === "'") {
		url2 = url.substr(1, url.length - 2);
		url2 = url2.replace(/\\'/g, "'");
		url2 = `"${url2}"`;
	}

	try {
		return JSON.parse(url2);
	} catch (e) {
		return url;
	}
}

function getTimestamp(text) {
	const match = /([0-9]+)-([0-9]+)-([0-9]+)\s+([0-9]+):([0-9]+)/.exec(text);
	if (match === null) { return null; }

	return Date.UTC(
		parseInt(match[1], 10), // year
		parseInt(match[2], 10) - 1, // month
		parseInt(match[3], 10), // day
		parseInt(match[4], 10), // hours
		parseInt(match[5], 10), // minutes
		0, // seconds
		0); // milliseconds
}


function getTitle(html) {
	const node = html.querySelector("#gn");
	return (node !== null ? node.textContent.trim() : null);
}

function getTitleOriginal(html) {
	const node = html.querySelector("#gj");
	return (node !== null ? node.textContent.trim() : null);
}

function getMainThumbnailUrl(html) {
	const node = html.querySelector("#gd1>div");
	if (node === null) { return null; }

	let url = getCssUrl(node.style.backgroundImage);
	if (url !== null) { return url; }

	const img = node.querySelector("img[src]");
	return (img !== null ? img.getAttribute("src") : null);
}

function getCategory(html) {
	const node = html.querySelector("#gdc>div[onclick]");
	if (node === null) { return null; }

	const pattern = /['"].*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?['"]/;
	const match = pattern.exec(node.getAttribute("onclick") || "");
	return (match !== null ? match[1] : null);
}

function getUploader(html) {
	const node = html.querySelector("#gdn>a");
	if (node === null) { return null; }

	const pattern = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/;
	const match = pattern.exec(decodeURI(node.getAttribute("href")) || "");
	return (match !== null ? (match[1].split("/")[1] || "") : null);
}

function getRatingCount(html) {
	const node = html.querySelector("#rating_count");
	if (node === null) { return null; }

	const value = parseInt(node.textContent.trim(), 10);
	return (Number.isNaN(value) ? null : value);
}

function getRatingAverage(html) {
	const node = html.querySelector("#rating_label");
	if (node === null) { return null; }

	const pattern = /average:\s*([0-9\.]+)/i;
	const match = pattern.exec(node.textContent);
	if (match === null) { return null; }

	const value = parseFloat(match[1]);
	return (Number.isNaN(value) ? null : value);
}

function getFavoriteCount(html) {
	const node = html.querySelector("#favcount");
	if (node === null) { return null; }

	const pattern = /\s*([0-9]+|once)/i;
	const match = pattern.exec(node.textContent);
	if (match === null) { return null; }

	const match1 = match[1];
	return (match1.toLowerCase() === "once" ? 1 : parseInt(match1, 10));
}

function getFavoriteCategory(html) {
	const node = html.querySelector("#fav>div.i");
	if (node === null) { return null; }

	const title = node.getAttribute("title") || "";
	const pattern = /background-position\s*:\s*\d+(?:px)?\s+(-?\d+)(?:px)/;
	const match = pattern.exec(node.getAttribute("style") || "");
	const index = (match !== null) ?
		Math.floor((Math.abs(parseInt(match[1], 10)) - 2) / 19) :
		-1;

	return { index, title };
}

function getThumbnailSize(html) {
	const nodes = html.querySelectorAll("#gdo4>.nosel");
	if (nodes.length < 2) { return null; }
	return (nodes[0].classList.contains("ths") ? "normal" : "large");
}

function getThumbnailRows(html) {
	const nodes = html.querySelectorAll("#gdo2>.nosel");
	if (nodes.length === 0) { return null; }

	const pattern = /\s*([0-9]+)/;
	for (const node of nodes) {
		if (node.classList.contains("ths")) {
			const match = pattern.exec(node.textContent);
			if (match !== null) {
				return parseInt(match[1], 10);
			}
		}
	}

	return null;
}

function getTags(html) {
	const pattern = /(.+):/;
	const groups = html.querySelectorAll("#taglist tr");
	const tags = {};

	for (const group of groups) {
		const tds = group.querySelectorAll("td");
		if (tds.length === 0) { continue; }

		const match = pattern.exec(tds[0].textContent);
		const namespace = (match !== null ? match[1].trim() : "");

		let namespaceTags;
		if (tags.hasOwnProperty(namespace)) {
			namespaceTags = tags[namespace];
		} else {
			namespaceTags = [];
			tags[namespace] = namespaceTags;
		}

		const tagDivs = tds[tds.length - 1].querySelectorAll("div");
		for (const div of tagDivs) {
			const link = div.querySelector("a");
			if (link === null) { continue; }

			const tag = link.textContent.trim();
			namespaceTags.push(tag);
		}
	}

	return tags;
}

function getDetailsNodes(html) {
	return html.querySelectorAll("#gdd tr");
}

function getDateUploaded(detailsNodes) {
	if (detailsNodes.length <= 0) { return null; }
	const node = detailsNodes[0].querySelector(".gdt2");
	return (node !== null ? getTimestamp(node.textContent) : null);
}

function getVisibleInfo(detailsNodes) {
	let visible = true;
	let visibleReason = null;

	if (detailsNodes.length > 2) {
		const node = detailsNodes[2].querySelector(".gdt2");
		if (node !== null) {
			const pattern = /no\s+\((.+?)\)/i;
			const match = pattern.exec(node.textContent);
			if (match !== null) {
				visible = false;
				visibleReason = match[1].trim();
			}
		}
	}

	return { visible, visibleReason };
}

function getLanguageInfo(detailsNodes) {
	let language = null;
	let translated = false;

	if (detailsNodes.length > 3) {
		const node = detailsNodes[3].querySelector(".gdt2");
		if (node !== null) {
			const textNode = node.firstChild;
			if (textNode !== null && textNode.nodeType === Node.TEXT_NODE) {
				language = textNode.nodeValue.trim();
			}

			const trNode = node.querySelector(".halp");
			translated = (trNode !== null && trNode.textContent.trim().toLowerCase() === "tr");
		}
	}

	return { language, translated };
}

function getApproximateTotalFileSize(detailsNodes) {
	if (detailsNodes.length <= 4) { return null; }

	const node = detailsNodes[4].querySelector(".gdt2");
	if (node === null) { return null; }

	const pattern = /([0-9\.]+)\s*(\w+)/i;
	const match = pattern.exec(node.textContent);
	return (match !== null ? utils.getBytesSizeFromLabel(match[1], match[2]) : null);
}

function getFileCount(detailsNodes) {
	if (detailsNodes.length <= 5) { return null; }

	const node = detailsNodes[5].querySelector(".gdt2");
	if (node === null) { return null; }

	const pattern = /([0-9,]+)\s*pages/i;
	const match = pattern.exec(node.textContent);
	return (match !== null ? parseInt(match[1].replace(/,/g, ""), 10) : null);
}

function getParent(detailsNodes) {
	if (detailsNodes.length <= 1) { return null; }

	const node = detailsNodes[1].querySelector(".gdt2>a");
	if (node === null) { return null; }

	const info = utils.getGalleryIdentifierAndPageFromUrl(node.getAttribute("href") || "");
	return (info !== null ? info.identifier : null);
}

function getNewerVersions(html) {
	const results = [];
	const nodes = html.querySelectorAll("#gnd>a");

	for (const node of nodes) {
		const info = utils.getGalleryIdentifierAndPageFromUrl(node.getAttribute("href") || "");
		if (info === null) { continue; }

		const galleryInfo = {
			identifier: info.identifier,
			name: node.textContent.trim(),
			dateUploaded: null
		};

		if (node.nextSibling !== null) {
			galleryInfo.dateUploaded = getTimestamp(node.nextSibling.textContent);
		}

		results.push(galleryInfo);
	}

	return results;
}

function getTorrentCount(html) {
	const nodes = html.querySelectorAll("#gd5 .g2>a");
	const pattern = /\btorrent\s+download\s*\(\s*(\d+)\s*\)/i;
	for (const node of nodes) {
		const match = pattern.exec(node.textContent);
		if (match !== null) {
			return parseInt(match[1], 10);
		}
	}

	return null;
}

function getArchiverKey(html) {
	const nodes = html.querySelectorAll("#gd5 .g2>a");
	const pattern = /\barchive\s+download\b/i;
	for (const node of nodes) {
		const match = pattern.exec(node.textContent);
		if (match !== null) {
			const pattern2 = /&or=([^'"]*)['"]/;
			const match2 = pattern2.exec(node.getAttribute("onclick") || "");
			return (match2 !== null ? match2[1] : null);
		}
	}

	return null;
}

function populateGalleryInfoFromHtml(info, html) {
	// General
	info.title = getTitle(html);
	info.titleOriginal = getTitleOriginal(html);
	info.mainThumbnailUrl = getMainThumbnailUrl(html);
	info.category = getCategory(html);
	info.uploader = getUploader(html);

	info.ratingCount = getRatingCount(html);
	info.ratingAverage = getRatingAverage(html);

	info.favoriteCount = getFavoriteCount(html);
	info.favoriteCategory = getFavoriteCategory(html);

	info.thumbnailSize = getThumbnailSize(html);
	info.thumbnailRows = getThumbnailRows(html);

	info.newerVersions = getNewerVersions(html);

	info.torrentCount = getTorrentCount(html);
	info.archiverKey = getArchiverKey(html);

	// Details
	const detailsNodes = getDetailsNodes(html);

	info.dateUploaded = getDateUploaded(detailsNodes);

	info.parent = getParent(detailsNodes);

	const visibleInfo = getVisibleInfo(detailsNodes);
	info.visible = visibleInfo.visible;
	info.visibleReason = visibleInfo.visibleReason;

	const languageInfo = getLanguageInfo(detailsNodes);
	info.language = languageInfo.language;
	info.translated = languageInfo.translated;

	info.approximateTotalFileSize = getApproximateTotalFileSize(detailsNodes);

	info.fileCount = getFileCount(detailsNodes);

	// Tags
	info.tags = getTags(html);
	info.tagsHaveNamespace = true;
}

function getFromHtml(html, url) {
	const link = html.querySelector(".ptt td.ptds>a[href],.ptt td.ptdd>a[href]");
	if (link === null) { return null; }

	const idPage = utils.getGalleryIdentifierAndPageFromUrl(link.getAttribute("href") || "");
	if (idPage === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = idPage.identifier;
	info.currentPage = idPage.page;
	info.source = "html";
	populateGalleryInfoFromHtml(info, html);
	info.sourceSite = utils.getSourceSiteFromUrl(url);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromHtml;

},{"./types":4,"./utils":5}],4:[function(require,module,exports){
"use strict";

const GalleryIdentifier = require("../gallery-identifier").GalleryIdentifier;


class GalleryInfo {
	constructor() {
		this.identifier = null;
		this.title = null;
		this.titleOriginal = null;
		this.dateUploaded = null;
		this.category = null;
		this.uploader = null;
		this.ratingAverage = null;
		this.ratingCount = null;
		this.favoriteCategory = null;
		this.favoriteCount = null;
		this.mainThumbnailUrl = null;
		this.thumbnailSize = null;
		this.thumbnailRows = null;
		this.fileCount = null;
		this.approximateTotalFileSize = null;
		this.visible = true;
		this.visibleReason = null;
		this.language = null;
		this.translated = null;
		this.archiverKey = null;
		this.torrentCount = null;
		this.tags = null;
		this.tagsHaveNamespace = null;
		this.currentPage = null;
		this.parent = null;
		this.newerVersions = null;
		this.source = null;
		this.sourceSite = null;
		this.dateGenerated = null;
	}
}


module.exports = {
	GalleryIdentifier,
	GalleryInfo
};

},{"../gallery-identifier":1}],5:[function(require,module,exports){
"use strict";

const types = require("./types");

const sizeLabelToBytesPrefixes = [ "b", "kb", "mb", "gb" ];


function getGalleryPageFromUrl(url) {
	const match = /\?(?:(|[\w\W]*?&)p=([\+\-]?\d+))?/.exec(url);
	if (match !== null && match[1]) {
		const page = parseInt(match[1], 10);
		if (!Number.isNaN(page)) { return page; }
	}
	return null;
}

function getGalleryIdentifierAndPageFromUrl(url) {
	const identifier = types.GalleryIdentifier.createFromUrl(url);
	if (identifier === null) { return null; }

	const page = getGalleryPageFromUrl(url);
	return { identifier, page };
}

function getBytesSizeFromLabel(number, label) {
	let i = sizeLabelToBytesPrefixes.indexOf(label.toLowerCase());
	if (i < 0) { i = 0; }
	return Math.floor(parseFloat(number) * Math.pow(1024, i));
}

function getSourceSiteFromUrl(url) {
	const pattern = /^(?:(?:[a-z][a-z0-9\+\-\.]*:\/*|\/{2,})([^\/]*))?(\/?[\w\W]*)$/i;
	const match = pattern.exec(url);

	if (match !== null && match[1]) {
		const host = match[1].toLowerCase();
		if (host.indexOf("exhentai") >= 0) { return "exhentai"; }
		if (host.indexOf("e-hentai") >= 0) { return "e-hentai"; }
	}

	return null;
}


module.exports = {
	getGalleryIdentifierAndPageFromUrl,
	getBytesSizeFromLabel,
	getSourceSiteFromUrl
};

},{"./types":4}],6:[function(require,module,exports){
"use strict";

const apiStyle = require("./style");
const style = require("../style");


function insertStylesheet() {
	const id = "x-gallery-links-right-sidebar";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style/gallery-right-sidebar.css");
	style.addStylesheet(src, id);
}

function getGroupContainer(parent) {
	const id = "x-gallery-links-right-sidebar-container";
	let node = parent.querySelector(`.${id}`);
	if (node === null) {
		node = document.createElement("div");
		node.className = `g2 gsp ${id}`;
		parent.appendChild(node);

		const p = parent.parentNode;
		if (p !== null) {
			p.classList.add("x-gallery-links-right-sidebar-contains-container");
		}
	}
	return node;
}

function createLink(label, order) {
	const parent = document.querySelector("#gd5");
	if (parent === null) {
		return { link: null, linkContainer: null };
	}

	// Style
	insertStylesheet();

	// Container
	const linkGroup = getGroupContainer(parent);
	const linkContainer = document.createElement("div");
	linkContainer.className = "x-gallery-links-right-sidebar-entry";
	if (typeof(order) === "number" && !Number.isNaN(order)) {
		linkContainer.style.order = `${order}`;
	}

	const img = document.createElement("img");
	img.src = apiStyle.getArrowIconUrl();
	linkContainer.appendChild(img);

	linkContainer.appendChild(document.createTextNode(" "));

	const link = document.createElement("a");
	link.textContent = label;
	linkContainer.appendChild(link);

	linkGroup.appendChild(linkContainer);

	return { link, linkContainer };
}


module.exports = {
	createLink
};

},{"../style":13,"./style":8,"./style/gallery-right-sidebar.css":9}],7:[function(require,module,exports){
"use strict";

const overrideAttributeName = "data-x-override-page-type";


function setOverride(value) {
	if (value) {
		document.documentElement.setAttribute(overrideAttributeName, value);
	} else {
		document.documentElement.removeAttribute(overrideAttributeName);
	}
}

function getOverride() {
	const value = document.documentElement.getAttribute(overrideAttributeName);
	return value ? value : null;
}

function get(doc, location) {
	const overrideType = getOverride();
	if (overrideType !== null) {
		return overrideType;
	}

	if (doc.querySelector("#searchbox") !== null) {
		return "search";
	}
	if (doc.querySelector("input[name=favcat]") !== null) {
		return "favorites";
	}
	if (doc.querySelector("#i1>h1") !== null) {
		return "image";
	}
	if (doc.querySelector(".gm h1#gn") !== null) {
		return "gallery";
	}
	if (doc.querySelector("#profile_outer") !== null) {
		return "settings";
	}
	if (doc.querySelector("#torrentinfo") !== null) {
		return "torrentInfo";
	}

	let n = doc.querySelector("body>.d>p");
	if (
		(n !== null && /gallery\s+has\s+been\s+removed|gallery\s+is\s+unavailable\s+due\s+to\s+a\s+copyright\s+claim/i.test(n.textContent)) ||
		doc.querySelector(".eze_dgallery_table") !== null) { // eze resurrection
		return "deletedGallery";
	}

	n = doc.querySelector("img[src]");
	if (n !== null && location !== null) {
		const p = location.pathname;
		if (
			n.getAttribute("src") === location.href &&
			p.substr(0, 3) !== "/t/" &&
			p.substr(0, 5) !== "/img/") {
			return "panda";
		}
	}

	// Unknown
	return null;
}


module.exports = {
	get,
	getOverride,
	setOverride
};

},{}],8:[function(require,module,exports){
"use strict";

function isDark() {
	return (
		window.location.hostname.indexOf("exhentai") >= 0 ||
		document.documentElement.classList.contains("x-force-dark"));
}

function setDocumentDarkFlag() {
	document.documentElement.classList.toggle("x-is-dark", isDark());
}

function getArrowIconUrl() {
	return (isDark() ? "https://exhentai.org/img/mr.gif" : "https://ehgt.org/g/mr.gif");
}


module.exports = {
	isDark,
	setDocumentDarkFlag,
	getArrowIconUrl
};

},{}],9:[function(require,module,exports){
module.exports = ".x-gallery-links-right-sidebar-container{margin-top:-25px;padding-bottom:0;display:flex;flex-direction:column}.x-gallery-links-right-sidebar-entry{margin-top:25px}div#gright.x-gallery-links-right-sidebar-contains-container{overflow-x:hidden;overflow-y:auto}";
},{}],10:[function(require,module,exports){
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

	const title = info.titleOriginal == "" ? info.title : info.titleOriginal;
	var filename = `${title} [${info.identifier.id.toString()}].json`;
	filename = filename.replace(/[\\\/:\*\?"<>\|]/g, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");

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

},{"../api/gallery-identifier":1,"../api/gallery-info/common-json":2,"../api/gallery-info/get-from-html":3,"../api/gallery-right-sidebar":6,"../api/page-type":7,"../query-string":11,"../ready":12,"../window-message":14}],11:[function(require,module,exports){
"use strict";

function getUrlParameters(url) {
	const result = {};
	const match = /^([^#\?]*)(\?[^#]*)?(#[\w\W]*)?$/.exec(url);
	if (match !== null && match[2] && match[2].length > 1) {
		const pattern = /([^=]*)(?:=([\w\W]*))?/;
		for (const part of match[2].substr(1).split("&")) {
			if (part.length === 0) { continue; }
			const match2 = pattern.exec(part);
			const value = match2[2];
			result[decodeURIComponent(match2[1])] = (value !== undefined ? decodeURIComponent(value) : null);
		}
	}
	return result;
}

function removeQueryParameter(url, parameterName) {
	return url.replace(
		new RegExp(`([&\\?])${parameterName}(?:(?:=[^&]*)?(&|$))`),
		(m0, m1, m2) => (m1 === "?" && m2 ? "?" : m2));
}


module.exports = {
	getUrlParameters,
	removeQueryParameter
};

},{}],12:[function(require,module,exports){
"use strict";

let isReadyValue = false;
let callbacks = null;
let checkIntervalId = null;
const checkIntervalRate = 250;


function isHooked() {
	return callbacks !== null;
}

function hook() {
	callbacks = [];
	window.addEventListener("load", checkIfReady, false);
	window.addEventListener("DOMContentLoaded", checkIfReady, false);
	document.addEventListener("readystatechange", checkIfReady, false);
	checkIntervalId = setInterval(checkIfReady, checkIntervalRate);
}

function unhook() {
	const cbs = callbacks;

	callbacks = null;
	window.removeEventListener("load", checkIfReady, false);
	window.removeEventListener("DOMContentLoaded", checkIfReady, false);
	document.removeEventListener("readystatechange", checkIfReady, false);
	clearInterval(checkIntervalId);
	checkIntervalId = null;

	invoke(cbs);
}

function invoke(callbacks) {
	for (let cb of callbacks) {
		try {
			cb();
		}
		catch (e) {
			console.error(e);
		}
	}
}

function isReady() {
	if (isReadyValue) { return true; }

	if (document.readyState === "interactive" || document.readyState === "complete") {
		if (isHooked()) { unhook(); }
		isReadyValue = true;
		return true;
	}
	return false;
}

function checkIfReady() {
	isReady();
}


function onReady(callback) {
	if (isReady()) {
		callback();
		return;
	}

	if (!isHooked()) { hook(); }

	callbacks.push(callback);
}


module.exports = {
	onReady: onReady,
	get isReady() { return isReady(); }
};

},{}],13:[function(require,module,exports){
"use strict";

let apiStyle = null;


function getId(id) {
	return `${id}-stylesheet`;
}

function getStylesheet(id) {
	return document.getElementById(getId(id));
}

function hasStylesheet(id) {
	return !!getStylesheet(id);
}

function addStylesheet(source, id) {
	if (apiStyle === null) { apiStyle = require("./api/style"); }
	apiStyle.setDocumentDarkFlag();

	const style = document.createElement("style");
	style.textContent = source;
	if (typeof(id) === "string") {
		style.id = getId(id);
	}
	document.head.appendChild(style);
	return style;
}


module.exports = {
	hasStylesheet,
	getStylesheet,
	addStylesheet
};

},{"./api/style":8}],14:[function(require,module,exports){
"use strict";

let commands = null;


function registerCommand(commandName, callback) {
	if (commands === null) {
		commands = {};
		window.addEventListener("message", onWindowMessage, false);
	}

	commands[commandName] = callback;
}

function post(targetWindow, commandName, data) {
	targetWindow.postMessage({
		xData: { command: commandName, data: data }
	}, window.location.origin);
}

function onWindowMessage(e) {
	if (e.origin !== window.origin) { return; }

	let data = e.data;
	if (data === null || typeof(data) !== "object") { return; }

	data = data.xData;
	if (data === null || typeof(data) !== "object") { return; }
	if (typeof(data.command) !== "string") { return; }

	const callback = commands[data.command];
	if (typeof(callback) !== "function") { return; }

	callback(e, data.data);
}


module.exports = {
	registerCommand,
	post
};

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL2dhbGxlcnktcmlnaHQtc2lkZWJhci5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1yaWdodC1zaWRlYmFyLmNzcyIsInNyYy9nYWxsZXJ5LW1ldGFkYXRhL21haW4uanMiLCJzcmMvcXVlcnktc3RyaW5nLmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIiwic3JjL3dpbmRvdy1tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlRnJvbVVybCh1cmwpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLy5leGVjKHVybCk7XHJcblx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiZ1wiIHx8IHBhdGgubGVuZ3RoIDwgMykgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQocGF0aFsxXSwgMTApO1xyXG5cdFx0cmV0dXJuIChOdW1iZXIuaXNOYU4oaWQpID8gbnVsbCA6IG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGF0aFsyXSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaWRlbnRpZmllciwgZGVmYXVsdFZhbHVlKSB7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwgfHwgdHlwZW9mKGlkZW50aWZpZXIpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdpZDogaWRlbnRpZmllci5pZCxcclxuXHRcdHRva2VuOiBpZGVudGlmaWVyLnRva2VuXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihuZXdlclZlcnNpb25zKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0aWYgKEFycmF5LmlzQXJyYXkobmV3ZXJWZXJzaW9ucykpIHtcclxuXHRcdGZvciAoY29uc3QgbmV3ZXJWZXJzaW9uIG9mIG5ld2VyVmVyc2lvbnMpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdGdhbGxlcnk6IChcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbi5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHRcdFx0bmFtZTogdG9TdHJpbmdPckRlZmF1bHQobmV3ZXJWZXJzaW9uLm5hbWUpLFxyXG5cdFx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5kYXRlVXBsb2FkZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdzVG9Db21tb25Kc29uKHRhZ3MpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRpZiAodGFncyAhPT0gbnVsbCAmJiB0eXBlb2YodGFncykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodGFncykpIHtcclxuXHRcdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIHRhZ3MpIHtcclxuXHRcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFncywgbmFtZXNwYWNlKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRjb25zdCB0YWdMaXN0ID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0XHRyZXN1bHRbbmFtZXNwYWNlXSA9IFsuLi50YWdMaXN0XTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25GYXZvcml0ZUNhdGVnb3J5KGluZm8pIHtcclxuXHRpZiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIDApLFxyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIilcclxuXHR9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25GdWxsR2FsbGVyeUluZm9Kc29uKGluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeTogKFxyXG5cdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLmlkZW50aWZpZXIsIG51bGwpIHx8XHJcblx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKSwgbnVsbCkpLFxyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGUsIFwiXCIpLFxyXG5cdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblx0XHRkYXRlX3VwbG9hZGVkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVVcGxvYWRlZCwgMCksXHJcblx0XHRjYXRlZ29yeTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5jYXRlZ29yeSwgXCJcIiksXHJcblx0XHR1cGxvYWRlcjogdG9TdHJpbmdPckRlZmF1bHQoaW5mby51cGxvYWRlciwgXCJcIiksXHJcblx0XHRyYXRpbmc6IHtcclxuXHRcdFx0YXZlcmFnZTogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5yYXRpbmdBdmVyYWdlLCAwKSxcclxuXHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8ucmF0aW5nQ291bnQsIDApLFxyXG5cdFx0fSxcclxuXHRcdGZhdm9yaXRlczoge1xyXG5cdFx0XHRjYXRlZ29yeTogKGluZm8uZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS5pbmRleCwgLTEpIDogLTEpLFxyXG5cdFx0XHRjYXRlZ29yeV90aXRsZTogKGluZm8uZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIikgOiBcIlwiKSxcclxuXHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDb3VudCwgMClcclxuXHRcdH0sXHJcblx0XHRwYXJlbnQ6IGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8ucGFyZW50LCBudWxsKSxcclxuXHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKGluZm8ubmV3ZXJWZXJzaW9ucyksXHJcblx0XHR0aHVtYm5haWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubWFpblRodW1ibmFpbFVybCwgXCJcIiksXHJcblx0XHR0aHVtYm5haWxfc2l6ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aHVtYm5haWxTaXplLCBcIlwiKSxcclxuXHRcdHRodW1ibmFpbF9yb3dzOiB0b051bWJlck9yRGVmYXVsdChpbmZvLnRodW1ibmFpbFJvd3MsIDApLFxyXG5cdFx0aW1hZ2VfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmlsZUNvdW50LCAwKSxcclxuXHRcdGltYWdlc19yZXNpemVkOiBmYWxzZSxcclxuXHRcdHRvdGFsX2ZpbGVfc2l6ZV9hcHByb3g6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplLCAwKSxcclxuXHRcdHZpc2libGU6IChpbmZvLnZpc2libGUgPT09IHRydWUpLFxyXG5cdFx0dmlzaWJsZV9yZWFzb246IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udmlzaWJsZVJlYXNvbiwgXCJcIiksXHJcblx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHR0cmFuc2xhdGVkOiAoaW5mby50cmFuc2xhdGVkID09PSB0cnVlKSxcclxuXHRcdHRhZ3M6IHRhZ3NUb0NvbW1vbkpzb24oaW5mby50YWdzKSxcclxuXHRcdC8vIE5ld1xyXG5cdFx0dGFnc19oYXZlX25hbWVzcGFjZTogKGluZm8udGFnc0hhdmVOYW1lc3BhY2UgPT09IHRydWUpLFxyXG5cdFx0dG9ycmVudF9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby50b3JyZW50Q291bnQsIDApLFxyXG5cdFx0YXJjaGl2ZXJfa2V5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmFyY2hpdmVyS2V5LCBudWxsKSxcclxuXHRcdHNvdXJjZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2UsIG51bGwpLFxyXG5cdFx0c291cmNlX3NpdGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlU2l0ZSwgbnVsbCksXHJcblx0XHRkYXRlX2dlbmVyYXRlZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlR2VuZXJhdGVkLCAwKVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uR2FsbGVyeUluZm9Kc29uKGluZm8pIHtcclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlVXBsb2FkZWQsIDApKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGUsIFwiXCIpLFxyXG5cdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblxyXG5cdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbihpbmZvLnRhZ3MpLFxyXG5cclxuXHRcdGxhbmd1YWdlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmxhbmd1YWdlLCBcIlwiKSxcclxuXHRcdHRyYW5zbGF0ZWQ6ICEhaW5mby50cmFuc2xhdGVkLFxyXG5cclxuXHRcdGZhdm9yaXRlX2NhdGVnb3J5OiB0b0NvbW1vbkZhdm9yaXRlQ2F0ZWdvcnkoaW5mbyksXHJcblxyXG5cdFx0dXBsb2FkX2RhdGU6IFtcclxuXHRcdFx0ZGF0ZS5nZXRVVENGdWxsWWVhcigpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ01vbnRoKCkgKyAxLFxyXG5cdFx0XHRkYXRlLmdldFVUQ0RhdGUoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENIb3VycygpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ01pbnV0ZXMoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENTZWNvbmRzKClcclxuXHRcdF0sXHJcblxyXG5cdFx0c291cmNlOiB7XHJcblx0XHRcdHNpdGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlU2l0ZSwgXCJcIiksXHJcblx0XHRcdGdpZDogKGluZm8uaWRlbnRpZmllciAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uaWRlbnRpZmllci5pZCwgMCkgOiAwKSxcclxuXHRcdFx0dG9rZW46IChpbmZvLmlkZW50aWZpZXIgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmlkZW50aWZpZXIudG9rZW4sIDApIDogMCksXHJcblx0XHRcdHBhcmVudF9nYWxsZXJ5OiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLnBhcmVudCwgbnVsbCksXHJcblx0XHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKGluZm8ubmV3ZXJWZXJzaW9ucylcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkpzb24oaW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5X2luZm86IHRvQ29tbW9uR2FsbGVyeUluZm9Kc29uKGluZm8pLFxyXG5cdFx0Z2FsbGVyeV9pbmZvX2Z1bGw6IHRvQ29tbW9uRnVsbEdhbGxlcnlJbmZvSnNvbihpbmZvKVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR0b0NvbW1vbkpzb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENzc1VybCh1cmxTdHJpbmcpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL3VybFxccypcXChcXHMqKFsnXCJdKT8vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybFN0cmluZyk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHF1b3RlID0gbWF0Y2hbMV0gfHwgXCJcIjtcclxuXHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gcXVvdGUubGVuZ3RoKTtcclxuXHJcblx0Y29uc3QgcGF0dGVybjIgPSBuZXcgUmVnRXhwKGAoJHtxdW90ZX0pXFxcXHMqXFxcXClcXFxccyokYCk7XHJcblx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaDIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdXJsID0gdXJsU3RyaW5nLnN1YnN0cigwLCBtYXRjaDIuaW5kZXggKyBtYXRjaDJbMV0ubGVuZ3RoKTtcclxuXHJcblx0bGV0IHVybDIgPSB1cmw7XHJcblx0aWYgKCFxdW90ZSkge1xyXG5cdFx0dXJsMiA9IHVybC5yZXBsYWNlKC9cIi9nLCBcIlxcXFxcXFwiXCIpO1xyXG5cdFx0dXJsMiA9IGBcIiR7dXJsMn1cImA7XHJcblx0fSBlbHNlIGlmIChxdW90ZSA9PT0gXCInXCIpIHtcclxuXHRcdHVybDIgPSB1cmwuc3Vic3RyKDEsIHVybC5sZW5ndGggLSAyKTtcclxuXHRcdHVybDIgPSB1cmwyLnJlcGxhY2UoL1xcXFwnL2csIFwiJ1wiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKHVybDIpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAodGV4dCkge1xyXG5cdGNvbnN0IG1hdGNoID0gLyhbMC05XSspLShbMC05XSspLShbMC05XSspXFxzKyhbMC05XSspOihbMC05XSspLy5leGVjKHRleHQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRyZXR1cm4gRGF0ZS5VVEMoXHJcblx0XHRwYXJzZUludChtYXRjaFsxXSwgMTApLCAvLyB5ZWFyXHJcblx0XHRwYXJzZUludChtYXRjaFsyXSwgMTApIC0gMSwgLy8gbW9udGhcclxuXHRcdHBhcnNlSW50KG1hdGNoWzNdLCAxMCksIC8vIGRheVxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbNF0sIDEwKSwgLy8gaG91cnNcclxuXHRcdHBhcnNlSW50KG1hdGNoWzVdLCAxMCksIC8vIG1pbnV0ZXNcclxuXHRcdDAsIC8vIHNlY29uZHNcclxuXHRcdDApOyAvLyBtaWxsaXNlY29uZHNcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2duXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlT3JpZ2luYWwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2pcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gbm9kZS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZDE+ZGl2XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGxldCB1cmwgPSBnZXRDc3NVcmwobm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xyXG5cdGlmICh1cmwgIT09IG51bGwpIHsgcmV0dXJuIHVybDsgfVxyXG5cclxuXHRjb25zdCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRyZXR1cm4gKGltZyAhPT0gbnVsbCA/IGltZy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RjPmRpdltvbmNsaWNrXVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1snXCJdLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/WydcIl0vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0gOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXBsb2FkZXIoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RuPmFcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoZGVjb2RlVVJJKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IChtYXRjaFsxXS5zcGxpdChcIi9cIilbMV0gfHwgXCJcIikgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmF0aW5nQ291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2NvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQobm9kZS50ZXh0Q29udGVudC50cmltKCksIDEwKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3JhdGluZ19sYWJlbFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL2F2ZXJhZ2U6XFxzKihbMC05XFwuXSspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNmYXZjb3VudFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1xccyooWzAtOV0rfG9uY2UpL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG1hdGNoMSA9IG1hdGNoWzFdO1xyXG5cdHJldHVybiAobWF0Y2gxLnRvTG93ZXJDYXNlKCkgPT09IFwib25jZVwiID8gMSA6IHBhcnNlSW50KG1hdGNoMSwgMTApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVDYXRlZ29yeShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNmYXY+ZGl2LmlcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpIHx8IFwiXCI7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9iYWNrZ3JvdW5kLXBvc2l0aW9uXFxzKjpcXHMqXFxkKyg/OnB4KT9cXHMrKC0/XFxkKykoPzpweCkvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIik7XHJcblx0Y29uc3QgaW5kZXggPSAobWF0Y2ggIT09IG51bGwpID9cclxuXHRcdE1hdGguZmxvb3IoKE1hdGguYWJzKHBhcnNlSW50KG1hdGNoWzFdLCAxMCkpIC0gMikgLyAxOSkgOlxyXG5cdFx0LTE7XHJcblxyXG5cdHJldHVybiB7IGluZGV4LCB0aXRsZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYm5haWxTaXplKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZG80Pi5ub3NlbFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHJldHVybiAobm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhzXCIpID8gXCJub3JtYWxcIiA6IFwibGFyZ2VcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFJvd3MoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzI+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXHMqKFswLTldKykvO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0aWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhzXCIpKSB7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhZ3MoaHRtbCkge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKC4rKTovO1xyXG5cdGNvbnN0IGdyb3VwcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiN0YWdsaXN0IHRyXCIpO1xyXG5cdGNvbnN0IHRhZ3MgPSB7fTtcclxuXHJcblx0Zm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcclxuXHRcdGNvbnN0IHRkcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKTtcclxuXHRcdGlmICh0ZHMubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGRzWzBdLnRleHRDb250ZW50KTtcclxuXHRcdGNvbnN0IG5hbWVzcGFjZSA9IChtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdLnRyaW0oKSA6IFwiXCIpO1xyXG5cclxuXHRcdGxldCBuYW1lc3BhY2VUYWdzO1xyXG5cdFx0aWYgKHRhZ3MuaGFzT3duUHJvcGVydHkobmFtZXNwYWNlKSkge1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IFtdO1xyXG5cdFx0XHR0YWdzW25hbWVzcGFjZV0gPSBuYW1lc3BhY2VUYWdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRhZ0RpdnMgPSB0ZHNbdGRzLmxlbmd0aCAtIDFdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XHJcblx0XHRmb3IgKGNvbnN0IGRpdiBvZiB0YWdEaXZzKSB7XHJcblx0XHRcdGNvbnN0IGxpbmsgPSBkaXYucXVlcnlTZWxlY3RvcihcImFcIik7XHJcblx0XHRcdGlmIChsaW5rID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0XHRjb25zdCB0YWcgPSBsaW5rLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0bmFtZXNwYWNlVGFncy5wdXNoKHRhZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGFncztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGV0YWlsc05vZGVzKGh0bWwpIHtcclxuXHRyZXR1cm4gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkZCB0clwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0ZVVwbG9hZGVkKGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDApIHsgcmV0dXJuIG51bGw7IH1cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzBdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBnZXRUaW1lc3RhbXAobm9kZS50ZXh0Q29udGVudCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmlzaWJsZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IHZpc2libGUgPSB0cnVlO1xyXG5cdGxldCB2aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPiAyKSB7XHJcblx0XHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzJdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHBhdHRlcm4gPSAvbm9cXHMrXFwoKC4rPylcXCkvaTtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHR2aXNpYmxlUmVhc29uID0gbWF0Y2hbMV0udHJpbSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2aXNpYmxlLCB2aXNpYmxlUmVhc29uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExhbmd1YWdlSW5mbyhkZXRhaWxzTm9kZXMpIHtcclxuXHRsZXQgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cdGxldCB0cmFuc2xhdGVkID0gZmFsc2U7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMykge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1szXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCB0ZXh0Tm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuXHRcdFx0aWYgKHRleHROb2RlICE9PSBudWxsICYmIHRleHROb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG5cdFx0XHRcdGxhbmd1YWdlID0gdGV4dE5vZGUubm9kZVZhbHVlLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgdHJOb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmhhbHBcIik7XHJcblx0XHRcdHRyYW5zbGF0ZWQgPSAodHJOb2RlICE9PSBudWxsICYmIHRyTm9kZS50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0clwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGxhbmd1YWdlLCB0cmFuc2xhdGVkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA0KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTlcXC5dKylcXHMqKFxcdyspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHV0aWxzLmdldEJ5dGVzU2l6ZUZyb21MYWJlbChtYXRjaFsxXSwgbWF0Y2hbMl0pIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA1KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNV0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTksXSspXFxzKnBhZ2VzL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHBhcnNlSW50KG1hdGNoWzFdLnJlcGxhY2UoLywvZywgXCJcIiksIDEwKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzFdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0Mj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKGluZm8gIT09IG51bGwgPyBpbmZvLmlkZW50aWZpZXIgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKSB7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2duZD5hXCIpO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRcdGlmIChpbmZvID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeUluZm8gPSB7XHJcblx0XHRcdGlkZW50aWZpZXI6IGluZm8uaWRlbnRpZmllcixcclxuXHRcdFx0bmFtZTogbm9kZS50ZXh0Q29udGVudC50cmltKCksXHJcblx0XHRcdGRhdGVVcGxvYWRlZDogbnVsbFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAobm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRnYWxsZXJ5SW5mby5kYXRlVXBsb2FkZWQgPSBnZXRUaW1lc3RhbXAobm9kZS5uZXh0U2libGluZy50ZXh0Q29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzdWx0cy5wdXNoKGdhbGxlcnlJbmZvKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3JyZW50Q291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkNSAuZzI+YVwiKTtcclxuXHRjb25zdCBwYXR0ZXJuID0gL1xcYnRvcnJlbnRcXHMrZG93bmxvYWRcXHMqXFwoXFxzKihcXGQrKVxccypcXCkvaTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFyY2hpdmVyS2V5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJhcmNoaXZlXFxzK2Rvd25sb2FkXFxiL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuMiA9IC8mb3I9KFteJ1wiXSopWydcIl0vO1xyXG5cdFx0XHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuMi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRcdFx0cmV0dXJuIChtYXRjaDIgIT09IG51bGwgPyBtYXRjaDJbMV0gOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCkge1xyXG5cdC8vIEdlbmVyYWxcclxuXHRpbmZvLnRpdGxlID0gZ2V0VGl0bGUoaHRtbCk7XHJcblx0aW5mby50aXRsZU9yaWdpbmFsID0gZ2V0VGl0bGVPcmlnaW5hbChodG1sKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRNYWluVGh1bWJuYWlsVXJsKGh0bWwpO1xyXG5cdGluZm8uY2F0ZWdvcnkgPSBnZXRDYXRlZ29yeShodG1sKTtcclxuXHRpbmZvLnVwbG9hZGVyID0gZ2V0VXBsb2FkZXIoaHRtbCk7XHJcblxyXG5cdGluZm8ucmF0aW5nQ291bnQgPSBnZXRSYXRpbmdDb3VudChodG1sKTtcclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpO1xyXG5cclxuXHRpbmZvLmZhdm9yaXRlQ291bnQgPSBnZXRGYXZvcml0ZUNvdW50KGh0bWwpO1xyXG5cdGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9IGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCk7XHJcblxyXG5cdGluZm8udGh1bWJuYWlsU2l6ZSA9IGdldFRodW1ibmFpbFNpemUoaHRtbCk7XHJcblx0aW5mby50aHVtYm5haWxSb3dzID0gZ2V0VGh1bWJuYWlsUm93cyhodG1sKTtcclxuXHJcblx0aW5mby5uZXdlclZlcnNpb25zID0gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKTtcclxuXHJcblx0aW5mby50b3JyZW50Q291bnQgPSBnZXRUb3JyZW50Q291bnQoaHRtbCk7XHJcblx0aW5mby5hcmNoaXZlcktleSA9IGdldEFyY2hpdmVyS2V5KGh0bWwpO1xyXG5cclxuXHQvLyBEZXRhaWxzXHJcblx0Y29uc3QgZGV0YWlsc05vZGVzID0gZ2V0RGV0YWlsc05vZGVzKGh0bWwpO1xyXG5cclxuXHRpbmZvLmRhdGVVcGxvYWRlZCA9IGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLnBhcmVudCA9IGdldFBhcmVudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRjb25zdCB2aXNpYmxlSW5mbyA9IGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby52aXNpYmxlID0gdmlzaWJsZUluZm8udmlzaWJsZTtcclxuXHRpbmZvLnZpc2libGVSZWFzb24gPSB2aXNpYmxlSW5mby52aXNpYmxlUmVhc29uO1xyXG5cclxuXHRjb25zdCBsYW5ndWFnZUluZm8gPSBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKTtcclxuXHRpbmZvLmxhbmd1YWdlID0gbGFuZ3VhZ2VJbmZvLmxhbmd1YWdlO1xyXG5cdGluZm8udHJhbnNsYXRlZCA9IGxhbmd1YWdlSW5mby50cmFuc2xhdGVkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLmZpbGVDb3VudCA9IGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHQvLyBUYWdzXHJcblx0aW5mby50YWdzID0gZ2V0VGFncyhodG1sKTtcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUh0bWwoaHRtbCwgdXJsKSB7XHJcblx0Y29uc3QgbGluayA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5wdHQgdGQucHRkcz5hW2hyZWZdLC5wdHQgdGQucHRkZD5hW2hyZWZdXCIpO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGlkUGFnZSA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdGlmIChpZFBhZ2UgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mbyA9IG5ldyB0eXBlcy5HYWxsZXJ5SW5mbygpO1xyXG5cdGluZm8uaWRlbnRpZmllciA9IGlkUGFnZS5pZGVudGlmaWVyO1xyXG5cdGluZm8uY3VycmVudFBhZ2UgPSBpZFBhZ2UucGFnZTtcclxuXHRpbmZvLnNvdXJjZSA9IFwiaHRtbFwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSHRtbChpbmZvLCBodG1sKTtcclxuXHRpbmZvLnNvdXJjZVNpdGUgPSB1dGlscy5nZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21IdG1sO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFJvd3MgPSBudWxsO1xyXG5cdFx0dGhpcy5maWxlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdHRoaXMudmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblx0XHR0aGlzLmxhbmd1YWdlID0gbnVsbDtcclxuXHRcdHRoaXMudHJhbnNsYXRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmFyY2hpdmVyS2V5ID0gbnVsbDtcclxuXHRcdHRoaXMudG9ycmVudENvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMudGFncyA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3NIYXZlTmFtZXNwYWNlID0gbnVsbDtcclxuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5uZXdlclZlcnNpb25zID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlU2l0ZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVHZW5lcmF0ZWQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyLFxyXG5cdEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuXHJcbmNvbnN0IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcyA9IFsgXCJiXCIsIFwia2JcIiwgXCJtYlwiLCBcImdiXCIgXTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvXFw/KD86KHxbXFx3XFxXXSo/JilwPShbXFwrXFwtXT9cXGQrKSk/Ly5leGVjKHVybCk7XHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzFdKSB7XHJcblx0XHRjb25zdCBwYWdlID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7IHJldHVybiBwYWdlOyB9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IGlkZW50aWZpZXIgPSB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllci5jcmVhdGVGcm9tVXJsKHVybCk7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFnZSA9IGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpO1xyXG5cdHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2UgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG51bWJlciwgbGFiZWwpIHtcclxuXHRsZXQgaSA9IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcy5pbmRleE9mKGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmIChpIDwgMCkgeyBpID0gMDsgfVxyXG5cdHJldHVybiBNYXRoLmZsb29yKHBhcnNlRmxvYXQobnVtYmVyKSAqIE1hdGgucG93KDEwMjQsIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KD86W2Etel1bYS16MC05XFwrXFwtXFwuXSo6XFwvKnxcXC97Mix9KShbXlxcL10qKSk/KFxcLz9bXFx3XFxXXSopJC9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybCk7XHJcblxyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgaG9zdCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJleGhlbnRhaVwiOyB9XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZS1oZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJlLWhlbnRhaVwiOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsLFxyXG5cdGdldFNvdXJjZVNpdGVGcm9tVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9zdHlsZVwiKTtcclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXJcIjtcclxuXHRpZiAoc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL2dhbGxlcnktcmlnaHQtc2lkZWJhci5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R3JvdXBDb250YWluZXIocGFyZW50KSB7XHJcblx0Y29uc3QgaWQgPSBcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWNvbnRhaW5lclwiO1xyXG5cdGxldCBub2RlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7XHJcblx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdG5vZGUuY2xhc3NOYW1lID0gYGcyIGdzcCAke2lkfWA7XHJcblx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblxyXG5cdFx0Y29uc3QgcCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG5cdFx0aWYgKHAgIT09IG51bGwpIHtcclxuXHRcdFx0cC5jbGFzc0xpc3QuYWRkKFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbnMtY29udGFpbmVyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluayhsYWJlbCwgb3JkZXIpIHtcclxuXHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dkNVwiKTtcclxuXHRpZiAocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRyZXR1cm4geyBsaW5rOiBudWxsLCBsaW5rQ29udGFpbmVyOiBudWxsIH07XHJcblx0fVxyXG5cclxuXHQvLyBTdHlsZVxyXG5cdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHJcblx0Ly8gQ29udGFpbmVyXHJcblx0Y29uc3QgbGlua0dyb3VwID0gZ2V0R3JvdXBDb250YWluZXIocGFyZW50KTtcclxuXHRjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItZW50cnlcIjtcclxuXHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKG9yZGVyKSkge1xyXG5cdFx0bGlua0NvbnRhaW5lci5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGltZy5zcmMgPSBhcGlTdHlsZS5nZXRBcnJvd0ljb25VcmwoKTtcclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIpKTtcclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGxpbmsudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHRsaW5rR3JvdXAuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiB7IGxpbmssIGxpbmtDb250YWluZXIgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZUxpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3RvcnJlbnRpbmZvXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJ0b3JyZW50SW5mb1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkfGdhbGxlcnlcXHMraXNcXHMrdW5hdmFpbGFibGVcXHMrZHVlXFxzK3RvXFxzK2FcXHMrY29weXJpZ2h0XFxzK2NsYWltL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDAgfHxcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4LWZvcmNlLWRhcmtcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWNvbnRhaW5lcnttYXJnaW4tdG9wOi0yNXB4O3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ueC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItZW50cnl7bWFyZ2luLXRvcDoyNXB4fWRpdiNncmlnaHQueC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbnMtY29udGFpbmVye292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0b31cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCB3aW5kb3dNZXNzYWdlID0gcmVxdWlyZShcIi4uL3dpbmRvdy1tZXNzYWdlXCIpO1xyXG5jb25zdCBnZXRGcm9tSHRtbCA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pbmZvL2dldC1mcm9tLWh0bWxcIik7XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5LXN0cmluZ1wiKTtcclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuY29uc3QgdG9Db21tb25Kc29uID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vY29tbW9uLWpzb25cIikudG9Db21tb25Kc29uO1xyXG5cclxubGV0IGRvd25sb2FkRGF0YVVybCA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0dXBHYWxsZXJ5UGFnZSgpIHtcclxuXHRjcmVhdGVHYWxsZXJ5UGFnZURvd25sb2FkTGluaygpO1xyXG5cclxuXHR3aW5kb3dNZXNzYWdlLnJlZ2lzdGVyQ29tbWFuZChcImdhbGxlcnlJbmZvUmVxdWVzdFwiLCAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGdldEZyb21IdG1sKGRvY3VtZW50LCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRpZiAoZGF0YSA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHRcdHdpbmRvd01lc3NhZ2UucG9zdChlLnNvdXJjZSwgXCJnYWxsZXJ5SW5mb1Jlc3BvbnNlXCIsIHRvQ29tbW9uSnNvbihkYXRhKSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlQYWdlRG93bmxvYWRMaW5rKCkge1xyXG5cdGNvbnN0IGdhbGxlcnlSaWdodFNpZGViYXIgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktcmlnaHQtc2lkZWJhclwiKTtcclxuXHRjb25zdCBsaW5rID0gZ2FsbGVyeVJpZ2h0U2lkZWJhci5jcmVhdGVMaW5rKFwiTWV0YWRhdGEgSlNPTlwiLCAwKS5saW5rO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gZ2V0R2FsbGVyeUluZm8oKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgdGl0bGUgPSBpbmZvLnRpdGxlT3JpZ2luYWwgPT0gXCJcIiA/IGluZm8udGl0bGUgOiBpbmZvLnRpdGxlT3JpZ2luYWw7XHJcblx0dmFyIGZpbGVuYW1lID0gYCR7dGl0bGV9IFske2luZm8uaWRlbnRpZmllci5pZC50b1N0cmluZygpfV0uanNvbmA7XHJcblx0ZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC9bXFxcXFxcLzpcXCpcXD9cIjw+XFx8XS9nLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC8sIFwiXCIpO1xyXG5cclxuXHRsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVuYW1lKTtcclxuXHRsaW5rLmhyZWYgPSBcIiNcIjtcclxuXHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25Eb3dubG9hZExpbmtDbGlja2VkLCBmYWxzZSk7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiYXV4Y2xpY2tcIiwgb25Eb3dubG9hZExpbmtDbGlja2VkLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbmZvKCkge1xyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gZ2V0RnJvbUh0bWwoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEb3dubG9hZERhdGFVcmwoaW5mbykge1xyXG5cdGNvbnN0IGluZm9TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCBcIiAgXCIpO1xyXG5cdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaW5mb1N0cmluZ10sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRG93bmxvYWRMaW5rQ2xpY2tlZChlKSB7XHJcblx0LyoganNoaW50IC1XMDQwICovXHJcblx0aWYgKGRvd25sb2FkRGF0YVVybCA9PT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEdhbGxlcnlJbmZvKCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBkb3dubG9hZCBkYXRhXCIpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRkb3dubG9hZERhdGFVcmwgPSBjcmVhdGVEb3dubG9hZERhdGFVcmwodG9Db21tb25Kc29uKGluZm8pKTtcclxuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkb3dubG9hZERhdGFVcmwpO1xyXG5cdH1cclxuXHQvKiBqc2hpbnQgK1cwNDAgKi9cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwVG9ycmVudFBhZ2UoKSB7XHJcblx0aWYgKCF3aW5kb3cub3BlbmVyKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpZGVudGlmaWVyID0gZ2V0R2FsbGVyeUlkZW50aWZpZXJGcm9tVG9ycmVudFBhZ2VVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHR3aW5kb3dNZXNzYWdlLnJlZ2lzdGVyQ29tbWFuZChcImdhbGxlcnlJbmZvUmVzcG9uc2VcIiwgKGUsIGluZm8pID0+IHtcclxuXHRcdGlmIChkb3dubG9hZERhdGFVcmwgIT09IG51bGwgfHwgIWlzVmFsaWRJbmZvKGluZm8sIGlkZW50aWZpZXIpKSB7IHJldHVybjsgfVxyXG5cdFx0ZG93bmxvYWREYXRhVXJsID0gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pO1xyXG5cdFx0Y3JlYXRlVG9ycmVudFBhZ2VEb3dubG9hZExpbmtzKGRvd25sb2FkRGF0YVVybCk7XHJcblx0fSk7XHJcblx0d2luZG93TWVzc2FnZS5wb3N0KHdpbmRvdy5vcGVuZXIsIFwiZ2FsbGVyeUluZm9SZXF1ZXN0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckZyb21Ub3JyZW50UGFnZVVybCh1cmwpIHtcclxuXHRjb25zdCBwYXJhbXMgPSBxdWVyeVN0cmluZy5nZXRVcmxQYXJhbWV0ZXJzKHVybCk7XHJcblx0aWYgKCFwYXJhbXMuaGFzT3duUHJvcGVydHkoXCJnaWRcIikgfHwgIXBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcInRcIikpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBwYXJzZUludChwYXJhbXMuZ2lkLCAxMCk7XHJcblx0aWYgKE51bWJlci5pc05hTihpZCkpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGFyYW1zLnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkSW5mbyhpbmZvLCBpZGVudGlmaWVyKSB7XHJcblx0Y29uc3QgZyA9IGluZm8uZ2FsbGVyeTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0ZyAhPT0gbnVsbCAmJiB0eXBlb2YgKGcpID09PSBcIm9iamVjdFwiICYmXHJcblx0XHRnLmdpZCA9PT0gaWRlbnRpZmllci5pZCAmJlxyXG5cdFx0Zy50b2tlbiA9PT0gaWRlbnRpZmllci50b2tlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvcnJlbnRQYWdlRG93bmxvYWRMaW5rcyh1cmwpIHtcclxuXHRjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvcnJlbnRpbmZvIGZvcm0gdGFibGU+dGJvZHlcIik7XHJcblx0Zm9yIChjb25zdCB0YWJsZSBvZiB0YWJsZXMpIHtcclxuXHRcdGNvbnN0IHRvcnJlbnRMaW5rID0gdGFibGUucXVlcnlTZWxlY3RvcihcInRyOm50aC1vZi10eXBlKDMpPnRkXCIpO1xyXG5cdFx0aWYgKHRvcnJlbnRMaW5rID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgdGV4dCA9IHRvcnJlbnRMaW5rLnRleHRDb250ZW50O1xyXG5cdFx0Y29uc3Qgd2hpdGVzcGFjZSA9IC9eXFxzKi8uZXhlYyh0ZXh0KVswXTtcclxuXHRcdGNvbnN0IHRvcnJlbnRGaWxlTmFtZSA9IHRleHQudHJpbSgpLnJlcGxhY2UoL1xcLlteXFwuXSokLywgXCJcIik7XHJcblxyXG5cdFx0Y29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuXHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRjZWxsLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgXCI1XCIpO1xyXG5cclxuXHRcdGlmICh3aGl0ZXNwYWNlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Y2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3aGl0ZXNwYWNlKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgJHt0b3JyZW50RmlsZU5hbWV9LmluZm8uanNvbmApO1xyXG5cdFx0bGluay5ocmVmID0gdXJsO1xyXG5cdFx0bGluay50ZXh0Q29udGVudCA9IFwiTWV0YWRhdGEgSlNPTlwiO1xyXG5cdFx0Y2VsbC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcblx0XHR0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblxyXG5cdHN3aXRjaCAoY3VycmVudFBhZ2VUeXBlKSB7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRzZXR1cEdhbGxlcnlQYWdlKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInRvcnJlbnRJbmZvXCI6XHJcblx0XHRcdHNldHVwVG9ycmVudFBhZ2UoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKHVybCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGNvbnN0IG1hdGNoID0gL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsyXSAmJiBtYXRjaFsyXS5sZW5ndGggPiAxKSB7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gLyhbXj1dKikoPzo9KFtcXHdcXFddKikpPy87XHJcblx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgbWF0Y2hbMl0uc3Vic3RyKDEpLnNwbGl0KFwiJlwiKSkge1xyXG5cdFx0XHRpZiAocGFydC5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybi5leGVjKHBhcnQpO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IG1hdGNoMlsyXTtcclxuXHRcdFx0cmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChtYXRjaDJbMV0pXSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVRdWVyeVBhcmFtZXRlcih1cmwsIHBhcmFtZXRlck5hbWUpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoXHJcblx0XHRuZXcgUmVnRXhwKGAoWyZcXFxcP10pJHtwYXJhbWV0ZXJOYW1lfSg/Oig/Oj1bXiZdKik/KCZ8JCkpYCksXHJcblx0XHQobTAsIG0xLCBtMikgPT4gKG0xID09PSBcIj9cIiAmJiBtMiA/IFwiP1wiIDogbTIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFVybFBhcmFtZXRlcnMsXHJcblx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgYXBpU3R5bGUgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElkKGlkKSB7XHJcblx0cmV0dXJuIGAke2lkfS1zdHlsZXNoZWV0YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRJZChpZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuICEhZ2V0U3R5bGVzaGVldChpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoc291cmNlLCBpZCkge1xyXG5cdGlmIChhcGlTdHlsZSA9PT0gbnVsbCkgeyBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL2FwaS9zdHlsZVwiKTsgfVxyXG5cdGFwaVN0eWxlLnNldERvY3VtZW50RGFya0ZsYWcoKTtcclxuXHJcblx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGUudGV4dENvbnRlbnQgPSBzb3VyY2U7XHJcblx0aWYgKHR5cGVvZihpZCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHN0eWxlLmlkID0gZ2V0SWQoaWQpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBjb21tYW5kcyA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJDb21tYW5kKGNvbW1hbmROYW1lLCBjYWxsYmFjaykge1xyXG5cdGlmIChjb21tYW5kcyA9PT0gbnVsbCkge1xyXG5cdFx0Y29tbWFuZHMgPSB7fTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbldpbmRvd01lc3NhZ2UsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGNvbW1hbmRzW2NvbW1hbmROYW1lXSA9IGNhbGxiYWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KHRhcmdldFdpbmRvdywgY29tbWFuZE5hbWUsIGRhdGEpIHtcclxuXHR0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xyXG5cdFx0eERhdGE6IHsgY29tbWFuZDogY29tbWFuZE5hbWUsIGRhdGE6IGRhdGEgfVxyXG5cdH0sIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd01lc3NhZ2UoZSkge1xyXG5cdGlmIChlLm9yaWdpbiAhPT0gd2luZG93Lm9yaWdpbikgeyByZXR1cm47IH1cclxuXHJcblx0bGV0IGRhdGEgPSBlLmRhdGE7XHJcblx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mKGRhdGEpICE9PSBcIm9iamVjdFwiKSB7IHJldHVybjsgfVxyXG5cclxuXHRkYXRhID0gZGF0YS54RGF0YTtcclxuXHRpZiAoZGF0YSA9PT0gbnVsbCB8fCB0eXBlb2YoZGF0YSkgIT09IFwib2JqZWN0XCIpIHsgcmV0dXJuOyB9XHJcblx0aWYgKHR5cGVvZihkYXRhLmNvbW1hbmQpICE9PSBcInN0cmluZ1wiKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBjYWxsYmFjayA9IGNvbW1hbmRzW2RhdGEuY29tbWFuZF07XHJcblx0aWYgKHR5cGVvZihjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm47IH1cclxuXHJcblx0Y2FsbGJhY2soZSwgZGF0YS5kYXRhKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlZ2lzdGVyQ29tbWFuZCxcclxuXHRwb3N0XHJcbn07XHJcbiJdfQ==
