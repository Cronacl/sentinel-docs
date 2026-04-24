type DocImageProps = {
  alt: string;
  caption?: string;
  src: string;
};

export default function DocImage({ alt, caption, src }: DocImageProps) {
  return (
    <figure className="doc-image not-prose">
      <div className="doc-image-frame">
        <img
          alt={alt}
          className="doc-image-element"
          loading="lazy"
          referrerPolicy="no-referrer"
          src={src}
        />
      </div>
      {caption ? <figcaption className="doc-image-caption">{caption}</figcaption> : null}
    </figure>
  );
}
