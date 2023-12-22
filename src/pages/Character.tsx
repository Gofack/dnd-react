import { Container } from '@mui/material';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function Character() {
	const { t } = useTranslation();
	const table = t('pages.character.table', { returnObjects: true });
	return (
		<div>
			<Container>
				<h2>{t('pages.character.title')}</h2>
				<table>
					<thead>
						<tr>
							{table &&
								Object.keys(table).map(function (el) {
									return <td key={el}>{el}</td>;
								})}
						</tr>
					</thead>
				</table>
			</Container>
		</div>
	);
}
