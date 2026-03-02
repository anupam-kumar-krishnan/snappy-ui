"use client";

import { useState } from "react";
import {
  Heart,
  Bell,
  Send,
  Search,
  Tag,
  ToggleLeft,
  ToggleRight,
  User,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [liked, setLiked] = useState(false);
  const [tags, setTags] = useState(["React", "Tailwind", "TypeScript"]);
  const [notification, setNotification] = useState(false);
  const [newTag, setNewTag] = useState("");

  return (
    <div className="min-h-screen bg-white dark:bg-[#08090b] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <Sparkles className="text-indigo-400" size={32} />
            Some Components
          </h1>
          <p className="text-indigo-600 dark:text-indigo-300 text-base sm:text-lg">
            25+ Beautiful Components for Modern React Apps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:auto-rows-[180px]">
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Cards
              </h3>
              <div className="flex-1 bg-gradient-to-br from-indigo-600/40 to-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 rounded-xl p-3 sm:p-4 shadow-lg flex flex-col">
                <div className="flex items-start gap-2 sm:gap-3 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <User className="text-white" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-xs sm:text-sm truncate">
                      Aman Kumar
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-300 text-[10px] sm:text-xs truncate">
                      Design Engineer
                    </p>
                  </div>
                </div>
                <p className="dark:text-indigo-200 text-[11px] sm:text-xs leading-relaxed mb-2">
                  Quickly prototype or build beautiful interfaces in
                  React/Next.js without writing all styles from scratch - Snappy
                  UI
                </p>
                <p className="dark:text-indigo-200 text-[11px] sm:text-xs leading-relaxed mb-2">
                  Snappy UI includes support for dark mode, animated toggles,
                  gradient/outline button variants, toast messages, and more —
                  giving you polished UI elements out of the box.
                </p>
                <p className="dark:text-indigo-200 text-[11px] sm:text-xs leading-relaxed">
                  I'll reccomend everyone to use Snappy UI.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="sm:col-span-1 lg:col-span-2 lg:row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Buttons
              </h3>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 text-xs sm:text-sm font-medium">
                  Gradient
                </button>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-indigo-400 text-indigo-300 rounded-lg hover:bg-indigo-400/10 transition-all duration-200 text-xs sm:text-sm font-medium">
                  Outline
                </button>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-indigo-300 hover:bg-indigo-400/10 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium">
                  Ghost
                </button>
              </div>
            </div>
          </div>

          {/* Toggles */}
          <div className="sm:col-span-1 lg:col-span-2 lg:row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Toggles
              </h3>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setToggle(!toggle)}
                  className={`w-12 h-7 sm:w-14 sm:h-8 rounded-full transition-all duration-300 relative flex-shrink-0 ${
                    toggle
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-600"
                      : "bg-indigo-900/50"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                      toggle ? "left-6 sm:left-7" : "left-1"
                    }`}
                  />
                </button>
                <span className="text-indigo-300 text-xs sm:text-sm">
                  Spring Animated Switches
                </span>
              </div>
            </div>
          </div>

          {/* AI Chat */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col min-h-[300px] sm:min-h-0">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                AI Chat
              </h3>
              <div className="flex-1 space-y-2 sm:space-y-3 mb-3 overflow-y-auto">
                <div className="flex gap-2">
                  <div className="bg-indigo-600/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2">
                    <p className="text-indigo-100 text-xs sm:text-sm">
                      Hello! How can I help?
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2">
                    <p className="text-white text-xs sm:text-sm">
                      Show me your features
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-indigo-600/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2">
                    <p className="text-indigo-100 text-xs sm:text-sm">
                      Interactive chat UI! ✨
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-indigo-900/30 border border-indigo-400/30 rounded-lg px-3 py-2 text-indigo-100 placeholder-indigo-400/50 text-xs sm:text-sm focus:outline-none focus:border-indigo-400/50"
                />
                <button className="p-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 flex-shrink-0">
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="sm:col-span-1 lg:col-span-2 lg:row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Inputs
              </h3>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search components..."
                  className="w-full bg-indigo-900/30 border border-indigo-400/30 rounded-lg pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-indigo-100 placeholder-indigo-400/50 text-xs sm:text-sm focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>
            </div>
          </div>

          {/* Badges & Tags */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col min-h-[250px] sm:min-h-0">
              <h3 className="text-indigo-400 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <Tag size={14} /> Badges & Tags
              </h3>
              <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                <div>
                  <p className="text-indigo-300 text-[10px] sm:text-xs mb-2 sm:mb-3 uppercase tracking-wider">
                    Active Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-200"
                      >
                        {tag}
                        <button
                          onClick={() => setTags(tags.filter((t) => t !== tag))}
                          className="hover:bg-white/20 p-0.5 rounded-full transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-indigo-300 text-[10px] sm:text-xs mb-2 uppercase tracking-wider">
                    Add New
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="New tag..."
                      className="flex-1 bg-indigo-900/30 border border-indigo-400/30 rounded-lg px-3 py-2 text-indigo-100 placeholder-indigo-400/50 text-xs sm:text-sm focus:outline-none focus:border-indigo-400/50"
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && newTag.trim()) {
                          setTags([...tags, newTag]);
                          setNewTag("");
                        }
                      }}
                    />
                    <button
                      onClick={() => {
                        if (newTag.trim()) {
                          setTags([...tags, newTag]);
                          setNewTag("");
                        }
                      }}
                      className="px-2.5 sm:px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 text-xs sm:text-sm font-medium flex-shrink-0"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="sm:col-span-1 lg:col-span-2 lg:row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Profile
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <User className="text-indigo-400" size={20} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-xs sm:text-sm truncate">
                    Aditya Singh
                  </h4>
                  <p className="text-indigo-300 text-[10px] sm:text-xs truncate">
                    @adityadev
                  </p>
                </div>
                <button
                  onClick={() => setLiked(!liked)}
                  className="transition-all duration-200 hover:scale-110 flex-shrink-0"
                >
                  <Heart
                    className={`${liked ? "fill-red-500 text-red-500" : "text-indigo-400"}`}
                    size={18}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="sm:col-span-2 lg:col-span-4 lg:row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Notifications
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <button
                  onClick={() => setNotification(!notification)}
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 text-xs sm:text-sm font-medium flex items-center gap-2 flex-shrink-0"
                >
                  <Bell size={14} />
                  Show Toast
                </button>
                {notification && (
                  <div className="w-full sm:flex-1 bg-gradient-to-r from-indigo-600/40 to-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 rounded-lg p-3 flex items-start sm:items-center gap-2 sm:gap-3 animate-[slideIn_0.3s_ease-out]">
                    <CheckCircle2
                      className="text-green-400 flex-shrink-0 mt-0.5 sm:mt-0"
                      size={18}
                    />
                    <p className="text-indigo-100 text-xs sm:text-sm flex-1">
                      Success! Your notification component is working perfectly.
                    </p>
                    <button
                      onClick={() => setNotification(false)}
                      className="text-indigo-300 hover:text-white transition-colors flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
