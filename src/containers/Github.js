import React, { Component } from 'react'
import axios  from 'axios'
import styled from 'styled-components'
import * as R from 'ramda'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import GithubContentList from 'src/components/Contents/GithubContentList'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/space.svg'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

class Github extends Component {

    constructor (props) {
        super(props)
        this.state = { contents: [] }
    }

    componentDidMount() {
      this.getMyContent()
    }

    getMyContent = () => {
        const url = 'https://api.github.com/users/Aekawan/repos'
        axios.get(url)
            .then(res => {
                const sortList = R.sortBy(R.prop('created_at'))(res.data)
                this.setState({ contents: R.reverse(sortList) })
            })
    }

    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={70} y={50} />
                <Title title={'Github'} light />
                <GithubContentList items={this.state.contents} />
            </Wrapper>
        )
    }
}

export default Github