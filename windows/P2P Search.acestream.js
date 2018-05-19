// ==UserScript==
// @name        P2P Search
// @namespace   acestream
// @author      Ace Stream
// @homepageURL http://awe.acestream.me/scripts/acestream/P2P_Search
// @description Search video content
// @version     0.13
// @grant       GM_log
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       AWE_engineStatus
// @noframes
// @include     http://yandex.*/*
// @include     http://www.yandex.*/*
// @include     http://ya.*/*
// @include     http://www.ya.*/*
// @include     https://yandex.*/*
// @include     https://www.yandex.*/*
// @include     https://ya.*/*
// @include     https://www.ya.*/*
// @include     http://*google*/*
// @include     https://*google*/*
// @require     http://awe-static.acestream.me/p2p_search/awe-proxy-light.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/search/map.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/vendor/jquery/jquery-1.12.4.min.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/lib/ts/core.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/lib/ts/lang.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/lib/ts/jquery_wrapper.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/vendor/moment.min.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/vendor/clipboard.min.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/vendor/malihu/jquery.mCustomScrollbar.concat.min.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/lib/ts/player.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/lib/ts/jsplayer.concat.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/search/handlers/yandex.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/search/handlers/google.js?v=0.12
// @require     http://awe-static.acestream.me/p2p_search/search-source.js?v=0.13
// @resource    css_google http://awe-static.acestream.me/p2p_search/css/google.css?v=0.12
// @resource    css_yandex http://awe-static.acestream.me/p2p_search/css/yandex.css?v=0.12
// @resource    css_share_popup http://awe-static.acestream.me/p2p_search/css/share_popup.css?v=0.12
// @resource    css_tooltip http://awe-static.acestream.me/p2p_search/css/tooltip.css?v=0.12
// @resource    css_search_results http://awe-static.acestream.me/p2p_search/css/search-results.css?v=0.12
// @resource    css_scrollbar http://awe-static.acestream.me/p2p_search/vendor/malihu/jquery.mCustomScrollbar.min.css?v=0.12
// @resource    css_scrollbar_theme http://awe-static.acestream.me/p2p_search/css/scrollbar_theme.css?v=0.12
// @resource    html_share_popup http://awe-static.acestream.me/p2p_search/html/share_popup.html?v=0.12
// @resource    font_material_icons https://fonts.gstatic.com/s/materialicons/v18/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2
// ==/UserScript==
