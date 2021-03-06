import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Modal from 'react-responsive-modal'
import styles from './custom-modal.css'
import LightBox from 'react-images';
import { css, StyleSheet } from 'aphrodite/no-important';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const CircleBorder = styled.div`
    width: 18vw;
    height: 18vw;
    border-radius: 50%;
    transform: translateZ(30px);
    padding: 5px;
    background: linear-gradient(to right, ${color.royal}, ${color.sky});
    @media only screen and (min-width: 45rem) {
        width: 15vw;
        height: 15vw;
    }
    @media only screen and (min-width: 75rem) {
        width: 10vw;
        height: 10vw;
    }
`

const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 100%;
`

const TextGroup = styled.div`
    margin-top: 10px;
    transform: translateZ(50px);
    @media only screen and (min-width: 75rem) {
        margin: 0px;
        margin-top: 20px;
    }
`

const Name = styled.label`
    font-size: 3vw;
    @media only screen and (min-width: 45rem) {
        font-size: 2vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1.5vw;
    }
`

const TechList = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    @media only screen and (min-width: 75rem) {
        margin-top: 20px;
    }
`

const Tech = styled.label`
    margin: 0 10px;
    font-size: 3vw;
    cursor: pointer;
    &::before {
        background: linear-gradient(to right, ${color.royal}, ${color.sky});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1.5vw;
    }
`

export default class WorkItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            lightBoxIsOpen: false,
            currentImage: 0,
            images: [
            {
                thumbnail: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&crop=faces&fit=crop&w=300&h=300',
                orientation: 'square',
                src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80'
            },
            {
                thumbnail: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159',
                orientation: 'landscape',
                src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80'
            },
            {
                thumbnail: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159',                
                orientation: 'landscape',
                src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80'
            },
            {
                thumbnail: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159',
                orientation: 'landscape',
                src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80'
            },
            ]
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }
    
    onCloseModal = () => {
        this.setState({ open: false });
    }

    openLightBox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightBoxIsOpen: true,
		})
	}
	closeLightBox = () => {
		this.setState({
			currentImage: 0,
			lightBoxIsOpen: false,
		})
	}
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		})
	}
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		})
	}
	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		})
	}

	handleClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext()
	}

	renderGallery = () => {
		const { images } = this.state;

		if (!images) return;

		const gallery = images.map((obj, i) => {
            console.log(obj.src);
			return (
				<a
					href={obj.src}
					className={css(classes.thumbnail, classes[obj.orientation])}
					key={i}
					onClick={(e) => this.openLightBox(i, e)}
				>
					<img src={obj.thumbnail} className={css(classes.source)} />
				</a>
			);
		});

		return (
			<div className={css(classes.gallery)}>
				{gallery}
			</div>
		);
	}

    render() {
        const { open, images, currentImage, lightBoxIsOpen } = this.state
        return (
            <React.Fragment>
            <Modal 
            open={open} 
            onClose={this.onCloseModal} 
            center
            classNames={{
            overlay: styles.customOverlay,
            modal: styles.customModal,
            }}
            >
            <h2>Simple centered modaldcdcdcdcdcdpcodpcdocpdocpo</h2>
            { this.renderGallery() }
            </Modal>
            <LightBox
                currentImage={currentImage}
                images={images}
                isOpen={lightBoxIsOpen}
                onClickImage={this.handleClickImage}
                onClickNext={this.gotoNext}
                onClickPrev={this.gotoPrevious}
                onClickThumbnail={this.gotoImage}
                onClose={this.closeLightBox}
			/>
            </React.Fragment>
        )
    }
}

const gutter = {
	small: 2,
	large: 4,
};
const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large,
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	},
});