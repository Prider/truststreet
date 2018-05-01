import React, { Component } from 'react'
import Slider from 'react-slick'
import DetailWrapperItem from './DetailWrapperItem'

class DetailsSliders extends Component {
  componentWillReceiveProps(newProps) {
    console.log('newProps.currentStep', newProps.currentStep)
    this.slider.slickGoTo(newProps.currentStep)
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      accessibility: false,
      arrows: false,
      draggable: false,
      swipeToSlide: false,
      touchMove: false
    }

    let concernList = []
    this.props.needAndConcerns.forEach(concern => {
      concern.QA.forEach((qa, index) => {
        concernList.push(
          <DetailWrapperItem
            concern={concern}
            qa={qa}
            key={concern.id + '-' + index}
            onAnswerQA={this.props.onAnswerQA}
          />
        )
      })
    })

    return (
      <Slider {...settings} ref={slider => (this.slider = slider)}>
        {concernList}
      </Slider>
    )
  }
}

export default DetailsSliders
