import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight); // this will return 0 as image has not loaded yet

    this.imageRef.current.addEventListener('load', this.setSpans); // once image is done loading, execute setSpans
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // 150 == grid-auto-rows value in ImageList.css
    // 1 == extra room for floating heights
    const spans = Math.ceil(height / 10);

    this.setState({ spans });

  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description} />
      </div>
    )
  }
}

export default ImageCard;
