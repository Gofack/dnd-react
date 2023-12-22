import { Header } from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Character } from './pages/Character';
import { Races } from './pages/Races';
import { Classes } from './pages/Classes';

const theme = createTheme({
	typography: {
		fontFamily: ['Onest', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			main: '#00a7e1',
			light: 'rgba(0, 126, 167, 0.2)',
			dark: '#00171f',
		},
		secondary: {
			main: '#007ea7',
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					'&.MuiContainer-root': {
						paddingLeft: 15,
						paddingRight: 15,
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: '#225560',
					borderRadius: 0,
					border: 'none',
					outline: 0,
					fontWeight: 600,
					fontSize: 16,
					cursor: 'pointer',
					color: 'white',
					'&:hover': {
						backgroundColor: '#225560',
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontSize: 16,
					lineHeight: 1,
					color: '#00171f',
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				h2: {
					fontSize: 24,
					fontWeight: 700,
					margin: '0 0 15px',
				},
			},
		},
		MuiList: {
			styleOverrides: {
				// fontSize: '14px',
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Routes>
				<Route
					path="character"
					element={<Character />}
				/>
				<Route
					path="races"
					element={<Races />}
				/>
				<Route
					path="classes"
					element={<Classes />}
				/>
				<Route
					index
					element={<Home />}
				/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
