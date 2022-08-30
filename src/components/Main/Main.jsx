import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Main.css';

function App() {
	const [company, setCompany] = React.useState([]);
	const [companyId, setcompanyId] = React.useState([]);
	const [complex, setcomplex] = React.useState([]);
	const [complexId, setcomplexId] = React.useState([]);
	const [rooms, setrooms] = React.useState([]);
	const [imgage, setImage] = React.useState([]);
	const [branch, setbranch] = React.useState([]);
	const [room, setRoom] = React.useState([]);
	const [index, setindex] = React.useState('');
	const [limit_Year, setlimit_Year] = React.useState([]);
	const [price, setprice] = React.useState([]);
	const [baza, setbaza] = React.useState([]);

	useEffect(() => {
		fetch('https://najot-hause.herokuapp.com/company')
			.then((res) => res.json())
			.then((data) => setCompany(data));
	}, []);
	useEffect(() => {
		fetch(`https://najot-hause.herokuapp.com/complex/${companyId}`)
			.then((res) => res.json())
			.then((data) => setcomplex(data));

		const images = company.find((e) => e.company_id == companyId);
		setImage(images);
	}, [companyId]);

	useEffect(() => {
		fetch(`https://najot-hause.herokuapp.com/rooms/${complexId}`)
			.then((res) => res.json())
			.then((data) => {
				setrooms(data);
				const xona = data.find((e) => e.room_id == room);
				setindex(xona);
			});
		const barnchinfo = complex.find((e) => e.cmp_branch_id == complexId);
		setbranch(barnchinfo);
	}, [complexId, room]);

	useEffect(() => {
		fetch(`https://najot-hause.herokuapp.com/bankroom/${room}`)
			.then((res) => res.json())
			.then((data) => {
				const roomID = data[0].infoall;
				setprice(roomID);
			});
	}, [room]);

	useEffect(() => {
		fetch(`https://najot-hause.herokuapp.com/bankprice/${price}/${limit_Year}`)
			.then((res) => res.json())
			.then((data) => {
				setbaza(data[0]);
			});
	}, [limit_Year, price]);

	return (
		<div className='container'>
			<div className='style'>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel htmlFor='grouped-native-select'>
						Company
					</InputLabel>
					<Select
						className='cls'
						onChange={(e) => {
							setcompanyId(e.target.value);
						}}
						native
						defaultValue=''
						id='grouped-native-select'
						label='Grouping'>
						<option aria-label='None' value='' />
						<optgroup label='Buildings'>
							{company.map((a) => (
								<option key={a.company_id} value={a.company_id}>
									{a.company_name}
								</option>
							))}
						</optgroup>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel htmlFor='grouped-native-select'>
						Complex
					</InputLabel>
					<Select
						className='cls'
						onChange={(e) => {
							setcomplexId(e.target.value);
						}}
						native
						defaultValue=''
						id='grouped-native-select'
						label='Grouping'>
						<option aria-label='None' value='' />
						<optgroup label='Buildings'>
							{complex.length &&
								complex.map((e) => (
									<option
										key={e.cmp_branch_id}
										value={e.cmp_branch_id}>
										{e.cmp_branch_name}
									</option>
								))}
						</optgroup>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel htmlFor='grouped-native-select'>
						Room
					</InputLabel>
					<Select
						className='cls'
						onChange={(e) => {
							setRoom(e.target.value);
						}}
						native
						defaultValue=''
						id='grouped-native-select'
						label='Grouping'>
						<option aria-label='None' value='' />
						<optgroup label='Buildings'>
							{rooms.map((e) => (
								<option key={e.room_id} value={e.room_id}>
									{e.room_of_number}
								</option>
							))}
						</optgroup>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel htmlFor='grouped-native-select'>
						Banks
					</InputLabel>
					<Select
						className='cls'
						onChange={(e) => {
							setlimit_Year(e.target.value);
						}}
						native
						defaultValue=''
						id='grouped-native-select'
						label='Grouping'>
						<option aria-label='None' value='' />
						<optgroup label='Buildings'>
							<option value='15'>15</option>
							<option value='10'>10</option>
							<option value='20'>20</option>
							<option value='25'>25</option>
						</optgroup>
					</Select>
				</FormControl>
			</div>

               

			   <div className='umman'>
                         
                                
		     <div className='meet'>
			          <img className='image' width={150} src={imgage?.company_pic} />
			         <h2 className='header'>{imgage?.company_name}</h2>
			         <spam className='header2'>{branch?.cmp_branch_name}</spam>

			         {index? <spam className='xona'>Room: {index?.room_of_number}</spam>:null}
			         {index? <spam className='xona'>Meter square: {index?.room_kv}</spam>:null}
			         {index? <spam className='xona'>Each Meter square: {index?.room_per_price}  sum</spam>:null}
			         {index? <spam className='xona'>Overall Summa : {price}  sum</spam>:null}

			 </div>

                   
				   <div>
				   <img className='image' width={140} src={baza?.bank_pic}/>
			               <h1 className='header'>{baza?.bank_name}</h1>
			           <h3 className='header'>{baza?.bank_limit_price}</h3>
					   {limit_Year[0]? <div className='acrd1'><spam className='header'>Mortage duration:  {limit_Year}  Year</spam><spam className = 'header her'>Bank servise: 2.5 Mln</spam></div> :null}
					    <h3 className='header'>{baza?.bank_limit_persent} </h3> 

				   </div>

				   <div>
			          <h3 className='header'>{baza?.payment}</h3>
			         <h3 className='header'>{baza?.month}</h3>
				   </div>



			   </div>

			           


			
		</div>
	);
}
export default App;
