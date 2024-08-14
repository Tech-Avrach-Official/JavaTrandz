import { cn } from "../../lib/utils";

export default function AnimatedGradientText({ children, className, }) {
    return (
        <div
            className={cn(
                "group relative mx-auto flex w-full flex-row items-center justify-center bg-black px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] dark:bg-black/40",
                className,
            )}
        >
            <div
                className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
        />

            {children}
        </div>
    );
}