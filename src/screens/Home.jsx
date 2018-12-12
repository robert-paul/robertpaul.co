import React from 'react';
import Cover from '../components/Cover';
import Intro from '../components/Intro';
import PncStub from '../components/PncStub'
import ParentsStub from '../components/ParentsStub'
import UbervoiceStub from '../components/UbervoiceStub'
import CouplesaddonStub from '../components/CouplesaddonStub'
import CraftStub from '../components/CraftStub'
import LunchmatchStub from '../components/LunchmatchStub'
import ElevatorStub from '../components/ElevatorStub'
import FlightStub from '../components/FlightStub'
import PedestrianStub from '../components/PedestrianStub'
import TablematStub from '../components/TablematStub'
import GestureStub from '../components/GestureStub'

const Home = () => (
	<div className="home-body-width">
		<Cover />
		<Intro />
		<h2 className="stub-header"><span className="stub-header-span">Past Work</span> Human-Computer Interaction Institute at CMU / 2017-2018</h2>
		<PncStub />
		<ParentsStub />
		<UbervoiceStub />
		<CouplesaddonStub />
		<CraftStub />
		<LunchmatchStub />
		<ElevatorStub />
		<FlightStub />
		<PedestrianStub />
		<TablematStub />
		<GestureStub />
	</div>
);

export default Home;