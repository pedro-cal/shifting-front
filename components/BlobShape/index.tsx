export default function BlobShape() {
  return (
    <>
      <div className="fx-blob-wrapper">
        <div className="fx-blob-ball"></div>
        <div className="fx-blob-ball"></div>
        <div className="fx-blob-ball"></div>
      </div>

      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
