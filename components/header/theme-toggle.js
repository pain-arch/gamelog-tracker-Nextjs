"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected={resolvedTheme === "dark"}
        size='md'
        onChange={handleToggle}
        startContent={<FiSun />}
        endContent={<FiMoon />}
      >
        {resolvedTheme === "dark"}
      </Switch>
    </div>
  );
};

export default ThemeToggle;
