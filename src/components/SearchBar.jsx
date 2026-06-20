import { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchBar = ({ onSearch, loading }) => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const isRtl = i18n.language === "ar";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      dir={isRtl ? "rtl" : "ltr"}
      className="relative group w-full"
    >
      <div className="relative flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden focus-within:border-[#6C5CE7]/50 transition-all duration-300 shadow-sm">
        <span className="px-4 text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("search.placeholder")}
          className="w-full bg-transparent text-[#1a1a2e] placeholder-gray-300 py-3 pr-3 outline-none text-sm"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="px-5 py-3 bg-gradient-to-r from-[#6C5CE7] to-[#a29bfe] text-white text-xs font-medium tracking-wider disabled:opacity-40 hover:opacity-90 transition-opacity rounded-r-xl"
        >
          {loading ? (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
