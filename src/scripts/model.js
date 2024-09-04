import { TextBlock, ImageBlock, TitleBlock, ColumnsBlock } from "../classes/block.js"

export const model = [
	new TitleBlock('Create your own website using JavaScript', 
		{
			tag: 'h1',
			styles: {
				background: '#ffe100',
				color: '#000100',
				padding: '15px',
				display: 'flex',
				'justify-content': 'center',
				'text-align': 'center',
				'font-size': '20px',
				'font-weight': '800',
				'text-transform': 'uppercase'
			}
		}),
	new TextBlock('Разметка данного сайта полностью написана на JavaScript', 
		{
			tag: 'p',
			styles: {
				color: '#44403c',
				'font-size': '15px',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'padding-top': '10px',
			}
		}),
	new ImageBlock('./src/images/js_wallpaper.jpeg',
		{
			styles: {
				padding: '10px',
				'justify-content': 'center',
				display: 'flex'
			},
			imageStyles: {
				width: '720px',
				height: 'auto'
			}
		}
	),
	new ColumnsBlock(
		[
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit, consequatur adipisci sit itaque et?',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit, consequatur adipisci sit itaque et?',
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus perferendis ullam architecto itaque facere sint aliquam possimus soluta ab consequuntur!'
		], 
		{
			tag: 'p',
			styles: {
				display: 'flex',
				color: '#83531d',
				'font-size': '15px',
				'padding': '0 50px'
			}
		}
	)
]