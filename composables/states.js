import imageUrl from "~~/utils/image";

export const useAgent = () => useState(() => []);
export const useUser = () => useState(() => []);
export const useIsSidebarOpen = () => useState(() => true);
export const useImage = () => useState("image", () => imageUrl);
