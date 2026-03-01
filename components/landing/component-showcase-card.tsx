"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  MousePointer,
  Layout,
  ToggleLeft,
  MessageSquare,
  Search,
  Send,
  BarChart3,
  Sliders,
  Star,
} from "lucide-react";
import { useState } from "react";

const ButtonsPreview = () => (
  <div className="flex flex-col gap-3 w-full">
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="px-5 py-2.5 rounded-lg bg-linear-to-r from-indigo-600 to-purple-500 text-primary-foreground text-sm font-medium shadow-glow"
    >
      Primary Action
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.04, borderColor: "hsl(235,80%,60%)" }}
      whileTap={{ scale: 0.97 }}
      className="px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium transition-colors"
    >
      Outline
    </motion.button>
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="px-5 py-2.5 rounded-lg bg-[#313135] text-foreground text-sm font-medium"
    >
      Ghost
    </motion.button>
  </div>
);

const CardsPreview = () => (
  <div className="w-full space-y-3">
    {[1, 2].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.15 }}
        whileHover={{ x: 4 }}
        className="rounded-lg bg-white dark:bg-[#19181a] border border-border p-3 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-md bg-linear-to-r from-indigo-500 to-indigo-700 shrink-0" />
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-20 bg-gray-300 dark:bg-[#27262b] rounded" />
          <div className="h-1.5 w-28 bg-gray-400 dark:bg-[#222325] rounded" />
        </div>
      </motion.div>
    ))}
  </div>
);

const InputsPreview = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="w-full space-y-3">
      <motion.div
        animate={{
          borderColor: focused ? "hsl(235,80%,60%)" : "hsl(240,4%,16%)",
        }}
        className="flex items-center gap-2 rounded-lg border px-3 py-2.5 bg-muted"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          className="bg-transparent text-sm text-foreground outline-none flex-1 placeholder:text-muted-foreground"
          placeholder="Search components..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Send className="w-4 h-4 text-muted-foreground cursor-pointer" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const TogglesPreview = () => {
  const [on1, setOn1] = useState(true);
  const [on2, setOn2] = useState(false);
  return (
    <div className="space-y-4 w-full">
      {[
        { label: "Dark mode", state: on1, toggle: () => setOn1(!on1) },
        { label: "Animations", state: on2, toggle: () => setOn2(!on2) },
      ].map((t) => (
        <div key={t.label} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{t.label}</span>
          <button
            onClick={t.toggle}
            className={`w-11 h-6 rounded-full relative transition-colors ${t.state ? "bg-white" : "bg-white/40"}`}
          >
            <motion.div
              animate={{ x: t.state ? 22 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-4 h-4 rounded-full bg-muted shadow-sm"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

const ColorPickerPreview = () => {
  const swatches = [
    "hsl(0,80%,60%)",
    "hsl(30,90%,55%)",
    "hsl(50,90%,55%)",
    "hsl(160,84%,50%)",
    "hsl(200,80%,55%)",
    "hsl(235,80%,60%)",
    "hsl(320,80%,55%)",
  ];
  const [active, setActive] = useState(5);
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ backgroundColor: swatches[active] }}
          className="w-10 h-10 rounded-lg"
          layout
        />
        <div className="flex-1">
          <span className="text-xs text-muted-foreground font-mono block">
            {swatches[active]}
          </span>
          <div className="mt-1.5 h-1.5 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: "100%" }}
              initial={{ width: "0%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        {swatches.map((c, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActive(i)}
            className="w-6 h-6 rounded-full border-3 transition-colors"
            style={{
              backgroundColor: c,
              borderColor: i === active ? "white" : "transparent",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const NotificationsPreview = () => (
  <div className="w-full space-y-2">
    {[
      {
        text: "Amazing milestone! 🎉",
        sub: "1,000 followers reached",
        color: "bg-indigo-400",
        iconColor: "text-indigo-600",
      },
      {
        text: "New message",
        sub: "You have 3 unread",
        color: "bg-green-300",
        iconColor: "text-green-600",
      },
    ].map((n, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.2 }}
        whileHover={{ x: -4 }}
        className="rounded-lg bg-muted/30 border border-border p-3 flex items-center gap-3 cursor-default"
      >
        <div
          className={`w-8 h-8 rounded-lg ${n.color} flex items-center justify-center shrink-0`}
        >
          <Zap className={`w-4 h-4 ${n.iconColor}`} />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">{n.text}</p>
          <p className="text-[10px] text-muted-foreground">{n.sub}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ── Bento grid items config ── */
const bentoItems = [
  {
    title: "Buttons",
    description: "Gradient, outline & ghost variants",
    icon: MousePointer,
    span: "md:col-span-1 md:row-span-1",
    preview: <ButtonsPreview />,
  },
  {
    title: "Cards",
    description: "Flexible card layouts",
    icon: Layout,
    span: "md:col-span-1 md:row-span-1",
    preview: <CardsPreview />,
  },
  {
    title: "Inputs",
    description: "Search bars & text fields",
    icon: Code2,
    span: "md:col-span-1 md:row-span-1",
    preview: <InputsPreview />,
  },
  {
    title: "Toggles",
    description: "Spring-animated switches",
    icon: ToggleLeft,
    span: "md:col-span-1 md:row-span-1",
    preview: <TogglesPreview />,
  },
  {
    title: "Color Picker",
    description: "Swatches, opacity & hex",
    icon: Palette,
    span: "md:col-span-1 md:row-span-1",
    preview: <ColorPickerPreview />,
  },
  {
    title: "Notifications",
    description: "Toasts & alert banners",
    icon: MessageSquare,
    span: "md:col-span-1 md:row-span-1",
    preview: <NotificationsPreview />,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 relative">
      <div className="absolute inset-0 dotted-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Buttons, Inputs{" "}
            <span className="text-gradient-primary">& More</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Interact — Hover, Click and Explore.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {bentoItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`group relative rounded-2xl bg-white/80 dark:bg-[#141516] border border-border p-5 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 overflow-hidden ${item.span}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(300px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),hsl(235,80%,60%,0.06),transparent)]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center"
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-100 dark:bg-[#111112] border border-border/50 p-4 flex items-center justify-center min-h-[120px]">
                  {item.preview}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
