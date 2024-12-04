"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import classNames from "classnames";
import React from "react";
import { getValidChildren } from "../helpers";
import { useIsomorphicLayoutEffect } from "../helpers/use-isomorphic-layout-effect";
import { Theme } from "../theme";
import type { Button } from "./button";

interface LightboxRootProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {}

const LightboxRoot: React.FC<LightboxRootProps> = (props) => {
	return <DialogPrimitive.Root {...props} />;
};

type LightboxTriggerElement = React.ElementRef<typeof DialogPrimitive.Trigger>;

interface LightboxTriggerProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
		"asChild"
	> {}

const LightboxTrigger: React.FC<LightboxTriggerProps> = React.forwardRef<
	LightboxTriggerElement,
	LightboxTriggerProps
>((props, forwardedRef) => {
	return <DialogPrimitive.Trigger {...props} ref={forwardedRef} asChild />;
});

LightboxTrigger.displayName = "LightboxTrigger";

type LightboxContentElement = React.ElementRef<typeof DialogPrimitive.Content>;

interface LightboxContentProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
		"asChild"
	> {
	loop?: boolean;
	container?: React.ComponentProps<typeof DialogPrimitive.Portal>["container"];
}

interface LightboxContextValue {
	items: React.ReactElement[];
	setItems: (items: React.ReactElement[]) => void;
	activeItemIndex: number;
	setActiveItemIndex: (index: number) => void;
	loop: boolean | undefined;
	toPrev: () => void;
	toNext: () => void;
}

const LightboxContext = React.createContext<LightboxContextValue | null>(null);

const useLightbox = () => {
	const context = React.useContext(LightboxContext);
	if (!context) {
		throw new Error("useLightbox must be used within a LightboxProvider");
	}
	return context;
};

const LightboxContent: React.FC<LightboxContentProps> = React.forwardRef<
	LightboxContentElement,
	LightboxContentProps
>((props, forwardedRef) => {
	const { children, loop, className, container, ...contentProps } = props;

	const [items, setItems] = React.useState<React.ReactElement[]>([]);
	const [activeItemIndex, setActiveItemIndex] = React.useState(0);

	const toPrev = React.useCallback(() => {
		setActiveItemIndex((current) => {
			const nextIndex = current - 1;
			if (nextIndex < 0) {
				return loop ? items.length - 1 : 0;
			}
			return nextIndex;
		});
	}, [items.length, loop]);

	const toNext = React.useCallback(() => {
		setActiveItemIndex((current) => {
			const nextIndex = current + 1;
			if (nextIndex >= items.length) {
				return loop ? 0 : items.length - 1;
			}
			return nextIndex;
		});
	}, [items.length, loop]);

	// Handle keyboard navigation
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowLeft":
					toPrev();
					break;
				case "ArrowRight":
					toNext();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [toPrev, toNext]);

	const contextValue = React.useMemo(
		() => ({
			items,
			setItems,
			activeItemIndex,
			setActiveItemIndex,

			loop,
			toPrev,
			toNext,
		}),
		[items, activeItemIndex, loop, toPrev, toNext],
	);

	return (
		<DialogPrimitive.Portal container={container}>
			<DialogPrimitive.Title className="sr-only">
				Test title
			</DialogPrimitive.Title>
			<DialogPrimitive.Description className="sr-only">
				Test description
			</DialogPrimitive.Description>

			<Theme asChild>
				<DialogPrimitive.Overlay className="fui-DialogOverlay fui-LightboxOverlay">
					<DialogPrimitive.Content
						{...contentProps}
						ref={forwardedRef}
						className={classNames("fui-LightboxContent", className)}
						aria-roledescription="carousel"
					>
						<LightboxContext.Provider value={contextValue}>
							{children}
						</LightboxContext.Provider>
					</DialogPrimitive.Content>
				</DialogPrimitive.Overlay>
			</Theme>
		</DialogPrimitive.Portal>
	);
});

LightboxContent.displayName = "LightboxContent";

interface LightboxItemsProps extends React.HTMLAttributes<HTMLDivElement> {}

const LightboxItems: React.FC<LightboxItemsProps> = ({
	children,
	className,
	...props
}) => {
	const { setItems, activeItemIndex } = useLightbox();
	const validChildren = getValidChildren<React.ReactNode>(children);

	const containerRef = React.useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		setItems(validChildren);
	}, []);

	// Scroll to center the active item
	React.useEffect(() => {
		if (containerRef.current && validChildren.length > 0) {
			const container = containerRef.current;
			const activeChild = container.children[activeItemIndex] as HTMLElement;
			const containerCenter = container.offsetWidth / 2;
			const childCenter = activeChild.offsetLeft + activeChild.offsetWidth / 2;

			container.scrollTo({
				left: childCenter - containerCenter,
				behavior: "smooth",
			});
		}
	}, [activeItemIndex, validChildren]);

	return (
		<div
			className={classNames("fui-LightboxItems", className)}
			ref={containerRef}
			{...props}
		>
			{validChildren.map((child, i) => {
				return (
					<div
						className={classNames("fui-LightboxItem", {
							"fui-LightboxActiveItem": activeItemIndex === i,
						})}
						key={child.key}
					>
						{React.cloneElement(child, {})}
					</div>
				);
			})}
		</div>
	);
};

type LightboxPrevElement = React.ElementRef<typeof Button>;
interface LightboxPrevButtonProps
	extends React.ComponentPropsWithoutRef<typeof Button> {}

const LightboxPrevButton: React.FC<LightboxPrevButtonProps> = React.forwardRef<
	LightboxPrevElement,
	LightboxPrevButtonProps
>(({ className, ...props }, ref) => {
	const { toPrev, activeItemIndex, loop } = useLightbox();
	const isDisabled = !loop && activeItemIndex === 0;

	return (
		<button
			onClick={toPrev}
			ref={ref}
			disabled={isDisabled}
			aria-label="Previous item"
			className={classNames(
				className,
				"fui-LightboxNavButton",
				"fui-LightboxPrevButton",
			)}
			{...props}
		/>
	);
});

type LightboxNextElement = React.ElementRef<typeof Button>;
interface LightboxNextButtonProps
	extends React.ComponentPropsWithoutRef<typeof Button> {}

const LightboxNextButton: React.FC<LightboxNextButtonProps> = React.forwardRef<
	LightboxNextElement,
	LightboxNextButtonProps
>(({ className, ...props }, ref) => {
	const { toNext, activeItemIndex, items, loop } = useLightbox();
	const isDisabled = !loop && activeItemIndex === items.length - 1;

	return (
		<button
			onClick={toNext}
			ref={ref}
			disabled={isDisabled}
			aria-label="Next item"
			className={classNames(
				className,
				"fui-LightboxNavButton",
				"fui-LightboxNextButton",
			)}
			{...props}
		/>
	);
});

LightboxNextButton.displayName = "LightboxNextButton";

interface LightboxThumbsProps extends React.ComponentPropsWithRef<"div"> {}

const LightboxThumbs: React.FC<LightboxThumbsProps> = ({
	className,
	...props
}) => {
	const { items, activeItemIndex, setActiveItemIndex } = useLightbox();
	const containerRef = React.useRef<HTMLDivElement>(null);

	// Scroll to center the active item
	React.useEffect(() => {
		if (containerRef.current && items.length > 0) {
			const container = containerRef.current;
			const activeChild = container.children[activeItemIndex] as HTMLElement;
			const containerCenter = container.offsetWidth / 2;
			const childCenter = activeChild.offsetLeft + activeChild.offsetWidth / 2;

			container.scrollTo({
				left: childCenter - containerCenter,
				behavior: "smooth",
			});
		}
	}, [activeItemIndex, items.length]);

	return (
		<div
			className={classNames("fui-LightboxThumbs", className)}
			ref={containerRef}
			{...props}
		>
			{items.map((item, index) => {
				return (
					<button
						onClick={() => setActiveItemIndex(index)}
						type="button"
						key={item.key}
						className={classNames("fui-LightboxThumb", {
							"fui-LightboxActiveThumb": activeItemIndex === index,
						})}
					>
						{React.cloneElement(item, {
							className: "fui-LightboxThumbImage",
							style: {},
						})}
					</button>
				);
			})}
		</div>
	);
};

type LightboxCloseElement = React.ElementRef<typeof DialogPrimitive.Close>;
interface LightboxCloseProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
		"asChild"
	> {}

const LightboxClose = React.forwardRef<
	LightboxCloseElement,
	LightboxCloseProps
>(({ className, ...props }, forwardedRef) => (
	<DialogPrimitive.Close
		className={classNames("fui-LightboxClose", className)}
		{...props}
		ref={forwardedRef}
		asChild
	/>
));

LightboxClose.displayName = "LightboxClose";

export {
	LightboxClose as Close,
	LightboxContent as Content,
	LightboxItems as Items,
	LightboxNextButton as NextButton,
	LightboxPrevButton as PrevButton,
	LightboxRoot as Root,
	LightboxTrigger as Trigger,
	LightboxThumbs as Thumbs,
};

export type {
	LightboxCloseProps as CloseProps,
	LightboxContentProps as ContentProps,
	LightboxItemsProps as ItemsProps,
	LightboxNextButtonProps as NextButtonProps,
	LightboxPrevButtonProps as PrevButtonProps,
	LightboxRootProps as RootProps,
	LightboxTriggerProps as TriggerProps,
	LightboxThumbsProps as ThumbsProps,
};
