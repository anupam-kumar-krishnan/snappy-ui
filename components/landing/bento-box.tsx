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
    <div className="min-h-screen bg-[#08090b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-indigo-400" size={40} />
            Some Components
          </h1>
          <p className="text-indigo-300 text-lg">
            25+ Beautiful Components for Modern React Apps
          </p>
        </div>

        <div className="grid grid-cols-6 gap-4 auto-rows-[180px]">
          <div className="col-span-2 row-span-2 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                Cards
              </h3>
              <div className="flex-1 bg-gradient-to-br from-indigo-600/40 to-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 rounded-xl p-4 shadow-lg flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <User className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">
                      Aman Kumar
                    </h4>
                    <p className="text-indigo-300 text-xs truncate">
                      Design Engineer
                    </p>
                  </div>
                </div>
                <p className="text-indigo-200 text-xs leading-relaxed flex-1">
                  Quickly prototype or build beautiful interfaces in
                  React/Next.js without writing all styles from scratch - Snappy
                  UI
                </p>
                <p className="text-indigo-200 text-xs leading-relaxed flex-1 py-3">
                  Snappy UI includes support for dark mode, animated toggles,
                  gradient/outline button variants, toast messages, and more —
                  giving you polished UI elements out of the box.
                </p>
                <p className="text-indigo-200 text-xs leading-relaxed flex-1 py-3">
                  I'll reccomend everyone to use Snappy UI.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                Buttons
              </h3>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 text-sm font-medium">
                  Gradient
                </button>
                <button className="px-4 py-2 border-2 border-indigo-400 text-indigo-300 rounded-lg hover:bg-indigo-400/10 transition-all duration-200 text-sm font-medium">
                  Outline
                </button>
                <button className="px-4 py-2 text-indigo-300 hover:bg-indigo-400/10 rounded-lg transition-all duration-200 text-sm font-medium">
                  Ghost
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                Toggles
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setToggle(!toggle)}
                  className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                    toggle
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-600"
                      : "bg-indigo-900/50"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                      toggle ? "left-7" : "left-1"
                    }`}
                  />
                </button>
                <span className="text-indigo-300 text-sm">
                  Spring Animated Switches
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-2 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                AI Chat
              </h3>
              <div className="flex-1 space-y-3 mb-3 overflow-hidden">
                <div className="flex gap-2">
                  <div className="bg-indigo-600/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl rounded-tl-sm px-4 py-2">
                    <p className="text-indigo-100 text-sm">
                      Hello! How can I help?
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl rounded-tr-sm px-4 py-2">
                    <p className="text-white text-sm">Show me your features</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-indigo-600/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl rounded-tl-sm px-4 py-2">
                    <p className="text-indigo-100 text-sm">
                      Interactive chat UI! ✨
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-indigo-900/30 border border-indigo-400/30 rounded-lg px-3 py-2 text-indigo-100 placeholder-indigo-400/50 text-sm focus:outline-none focus:border-indigo-400/50"
                />
                <button className="p-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200">
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                Inputs
              </h3>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search components..."
                  className="w-full bg-indigo-900/30 border border-indigo-400/30 rounded-lg pl-10 pr-4 py-2.5 text-indigo-100 placeholder-indigo-400/50 text-sm focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-2 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                <Tag size={16} /> Badges & Tags
              </h3>
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <p className="text-indigo-300 text-xs mb-3 uppercase tracking-wider">
                    Active Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200"
                      >
                        {tag}
                        <button
                          onClick={() => setTags(tags.filter((t) => t !== tag))}
                          className="hover:bg-white/20 p-0.5 rounded-full transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-indigo-300 text-xs mb-2 uppercase tracking-wider">
                    Add New
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="New tag..."
                      className="flex-1 bg-indigo-900/30 border border-indigo-400/30 rounded-lg px-3 py-2 text-indigo-100 placeholder-indigo-400/50 text-sm focus:outline-none focus:border-indigo-400/50"
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
                      className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 text-sm font-medium"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                Profile
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <User className="text-indigo-400" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">
                    Aditya Singh
                  </h4>
                  <p className="text-indigo-300 text-xs">@adityadev</p>
                </div>
                <button
                  onClick={() => setLiked(!liked)}
                  className="transition-all duration-200 hover:scale-110"
                >
                  <Heart
                    className={`${liked ? "fill-red-500 text-red-500" : "text-indigo-400"}`}
                    size={20}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-4 row-span-1 group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-600/0 group-hover:from-indigo-400/5 group-hover:to-indigo-600/10 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                Notifications
              </h3>
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => setNotification(!notification)}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 text-sm font-medium flex items-center gap-2"
                >
                  <Bell size={16} />
                  Show Toast
                </button>
                {notification && (
                  <div className="flex-1 bg-gradient-to-r from-indigo-600/40 to-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 rounded-lg p-3 flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
                    <CheckCircle2
                      className="text-green-400 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-indigo-100 text-sm flex-1">
                      Success! Your notification component is working perfectly.
                    </p>
                    <button
                      onClick={() => setNotification(false)}
                      className="text-indigo-300 hover:text-white transition-colors"
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
