"use server";
import path from "path";
import { promises as fs } from "fs";
import { cache } from "react";
import { file } from "zod";

const readFileCache = cache(async (filePath: string) => {
  return await fs.readFile(filePath, "utf-8");
});

export const getComponent = async (fileName: string | null, folder: string) => {
  const baseDir = path.join(process.cwd(), "components/snappyui");
  if (!fileName || fileName === "undefined") {
    const fullPath = path.join(baseDir, `${folder}.tsx`);

    return await readFileCache(fullPath);
  }
  console.log("here");
  const fullPath = path.join(baseDir, folder, `${fileName}.tsx`);

  return await readFileCache(fullPath);
};

export type CopyComponentState = {
  error: string;
  content: string;
  success: boolean;
};

export const copyComponent = async (
  prevState: CopyComponentState,
  formData: FormData
) => {
  try {
    const folder = formData.get("folder") as string;
    const fileName = formData.get("filename") as string;

    if (!folder || !fileName) {
      return {
        error: "Invalid folder or file name",
        content: "",
        success: false,
      };
    }
    const content = await getComponent(fileName as string, folder as string);

    if (!content) {
      return {
        error: "Invalid folder or file name",
        content: "",
        success: false,
      };
    }
    return {
      error: "",
      content: "",
      success: true,
    };
  } catch (error) {
    return {
      error: "Failed to Copy Component",
      content: "",
      success: false,
    };
  }
};
