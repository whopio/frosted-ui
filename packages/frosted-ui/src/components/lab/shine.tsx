import React from 'react';

const Shine = ({
  children,
  puffyness = '1',
  ...otherProps
}: {
  children: React.ReactNode;
  puffyness?: '0.5' | '0.75' | '1' | '1.25' | '1.5' | '1.75' | '2';
} & React.ComponentProps<'div'>) => {
  const filterId = React.useId();
  const filterRef = React.useRef<SVGFilterElement>(null);
  const childrenWrapperRef = React.useRef<HTMLDivElement>(null);
  const mouse = React.useRef({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const children = childrenWrapperRef.current;
    const filterElement = filterRef.current;
    const lightElement = filterElement?.querySelector('fePointLight');
    if (!filterElement || !children || !lightElement) return;

    const onPointerMove = (event: PointerEvent) => {
      const childrenBox = children.getBoundingClientRect();
      mouse.current = {
        x: event.pageX - window.scrollX,
        y: event.pageY - window.scrollY,
      };
      lightElement.setAttribute(
        'y',
        (mouse.current.y - childrenBox.top).toString(),
      );
      lightElement.setAttribute(
        'x',
        (mouse.current.x - childrenBox.left).toString(),
      );
    };

    const onScroll = () => {
      const childrenBox = children.getBoundingClientRect();
      lightElement.setAttribute(
        'y',
        (mouse.current.y - childrenBox.top).toString(),
      );
      lightElement.setAttribute(
        'x',
        (mouse.current.x - childrenBox.left).toString(),
      );
    };

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="fui-Shine" {...otherProps}>
      <svg width="0" height="0" className="fui-ShineSvgFilter">
        <filter id={filterId} ref={filterRef} colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation={puffyness} />
          <feSpecularLighting
            result="light-source"
            // represents the height of the surface for a light filter primitive
            surfaceScale="2"
            // The bigger the value the bigger the reflection
            specularConstant={'0.5'}
            // controls the focus for the light source. The bigger the value the brighter the light
            specularExponent="300"
            lightingColor="#666666"
          >
            <fePointLight x="60" y="69" z="300" />
          </feSpecularLighting>
          <feComposite
            result="reflections"
            in="light-source"
            in2="SourceAlpha"
            operator="in"
          />
          <feComposite
            in="SourceGraphic"
            in2="reflections"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
          />
        </filter>
      </svg>
      <div
        style={{ filter: `url(#${filterId})`, isolation: 'isolate' }}
        ref={childrenWrapperRef}
      >
        {children}
      </div>
    </div>
  );
};

export { Shine };
