import React, { Fragment } from "react";
import Header from "../Components/Header";

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.xStart = 0;
    this.xMove = 0;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  handleTouchStart(event) {
    this.xStart = event.nativeEvent.touches[0].clientX;
  }

  handleTouchMove(event) {
    this.xMove = event.nativeEvent.touches[0].clientX;
  }

  handleTouchEnd(event) {
    event.stopPropagation();
    if (this.xStart - this.xMove > 50) {
      this.props.handleNext(event);
    } else if (this.xMove - this.xStart > 50) {
      this.props.handlePrevious(event);
    }
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return (
      <li
        ref={this.slide}
        className={classNames}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleSlideClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>
        {index === 0 ? (
          <Header first={headline} />
        ) : (
          <article className="slide__content">
            {/* <h2 className="slide__headline">{headline}</h2>
                        <button className="slide__action btn">{button}</button> */}
          </article>
        )}
      </li>
    );
  }
}

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const { current } = this.state;
    const previous = current === 0 ? this.props.slides.length - 1 : current - 1;

    this.setState(
      {
        current: previous,
      },
      this.props.callback(previous)
    );
  }

  handleNextClick() {
    const { current } = this.state;
    const next = current === this.props.slides.length - 1 ? 0 : current + 1;

    this.setState(
      {
        current: next,
      },
      this.props.callback(next)
    );
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState(
        {
          current: index,
        },
        this.props.callback(index)
      );
    }
  }

  render() {
    const { current } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return (
      <Fragment>
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">
              {heading}
            </h3>

            {slides.map((slide) => (
              <Slide
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={this.handleSlideClick}
                handleNext={this.handleNextClick}
                handlePrevious={this.handlePreviousClick}
              />
            ))}
          </ul>
        </div>
        <div className="slider__controls">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={this.handlePreviousClick}
          />

          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
          />
        </div>
      </Fragment>
    );
  }
}
export default Slider;
