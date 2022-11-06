import { Link } from 'react-router-dom';
import Hero from '../assets/hero_archetype_rabea.jpg';
import QuadCortexBG from '../assets/quad-cortex-1600.jpg';
import styled from 'styled-components';
import './Home.modules.css';
import { QuadCortex } from './QuadCortex';
const StyledHero = styled.div`
	margin-top: 5rem;
	height: 100vh;
	background: url(${(props: { img: string }) => props.img}) center/cover no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledBanner = styled.div`
	width: 80vw;
	color: #fff;
	h1 {
		font-size: 4rem;
		font-weight: bold;
		margin: 0;
	}
	p {
		font-size: 1.25rem;
		text-transform: capitalize;
		margin: 0;
	}
`;

const StyledBannerBtns = styled.div`
	display: flex;
	margin-top: 2rem;
	align-items: center;
	a {
		color: #212121;
		background: #fff;
		border-radius: 9999px;
		padding: 0.8rem 1rem;
		letter-spacing: 0.1rem;
		text-decoration: none;
		font-weight: normal;
	}
`;

const QCStyle = {
	background: `url(${QuadCortexBG})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '100%',
};

const QCSection = () => {
	return (
		<>
			<div className="QCSectionStyle">
				<h1>QuadCortex</h1>
				<p>The most powerful floor modeler on the planet</p>
				<div className="img-container">
					<div className="QCSectionStyle__content"></div>
				</div>
			</div>
		</>
	);
};

export const Home = () => {
	return (
		<>
			<StyledHero img={Hero}>
				<StyledBanner title="Quad Cortex">
					<h1>Archetype: Rabea</h1>
					<p>Bringing world-class synth sounds to the modern guitarist.</p>
					<StyledBannerBtns>
						<Link to="/quad-cortex">Learn more</Link>
					</StyledBannerBtns>
				</StyledBanner>
			</StyledHero>

			<QCSection />
		</>
	);
};
