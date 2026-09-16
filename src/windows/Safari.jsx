import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import {
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  Plus,
  Share,
  Copy,
  Search,
  ShieldHalf,
  Mic,
  Camera,
  Settings,
  Grid3x3,
  X,
  MoreVertical,
  ChevronDown,
} from "lucide-react";
import { blogPosts, safariTabs, safariMeta } from "#constants";

const getBreadcrumb = (url) => {
  try {
    const { hostname, pathname } = new URL(url);
    const domain = hostname.replace("www.", "");
    const parts = pathname.split("/").filter(Boolean);
    return [domain, ...parts].join(" › ");
  } catch {
    return url;
  }
};

const FaviconPlaceholder = ({ image, title }) => (
  <div className="result-favicon">
    <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
  </div>
);

const Safari = () => (
  <>
    <div id="window-header">
      <WindowControls target="safari" />
      <PanelLeft className="ml-10 icon" />
      <div className="flex items-center gap-1 ml-5">
        <ChevronLeft className="icon" />
        <ChevronRight className="icon" />
      </div>
      <div className="flex-1 flex-center gap-3">
        <ShieldHalf className="icon" />
        <div className="search">
          <Search className="icon" />
          <input
            type="text"
            defaultValue={safariMeta.query}
            className="flex-1 border-none outline-none bg-transparent text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Share className="icon" />
        <Copy className="icon" />
        <Plus className="icon" />
      </div>
    </div>

    <div className="google-page">
      {/* Top bar */}
      <div className="google-topbar">
        <img src="/icons/safari_logo.png" alt="Google" className="google-logo" />

        <div className="google-searchbar">
          <input
            defaultValue={safariMeta.query}
            className="google-input"
            readOnly
          />
          <div className="search-right-cluster">
            <button className="cluster-btn" aria-label="Clear"><X size={18} /></button>
            <span className="cluster-divider" />
            <button className="cluster-btn mic-btn" aria-label="Voice search"><Mic size={20} /></button>
            <button className="cluster-btn lens-btn" aria-label="Search by image"><Camera size={20} /></button>
            <button className="cluster-search-btn" aria-label="Search">
              <Search size={20} className="text-[#4285f4]" />
            </button>
          </div>
        </div>

        <div className="google-topright">
          <Settings size={22} className="cursor-pointer text-[#5f6368] hover:text-gray-800" />
          <Grid3x3 size={22} className="cursor-pointer text-[#5f6368] hover:text-gray-800" />
        </div>
      </div>

      {/* Nav tabs */}
      <div className="google-nav-row">
        <div className="google-tabs">
          {safariTabs.map(({ label, active, caret }) => (
            <button key={label} className={`google-tab${active ? " active" : ""}`}>
              {label}
              {caret && <ChevronDown size={14} className="inline ml-0.5 -mb-0.5" />}
            </button>
          ))}
        </div>
      </div>
      <div className="google-nav-divider" />

      {/* Results */}
      <div className="google-results">
        <p className="results-count">{safariMeta.resultsCount}</p>

        <div className="results-list">
          {blogPosts.map(({ id, title, link, siteName, snippet, image }) => (
            <div key={id} className="google-result">
              <div className="result-meta">
                <div className="result-meta-left">
                  <FaviconPlaceholder image={image} title={title} />
                  <div className="result-meta-text">
                    <span className="result-site">{siteName}</span>
                    <span className="result-url">{getBreadcrumb(link)}</span>
                  </div>
                </div>
                <button className="result-kebab" aria-label="More options">
                  <MoreVertical size={16} />
                </button>
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer" className="result-title">
                {title}
              </a>
              <p className="result-snippet">
                {snippet}{" "}
                <a href={link} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read more
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
