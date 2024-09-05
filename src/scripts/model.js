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
	new TextBlock('The markup of this website is completely written in JavaScript',
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
	new ImageBlock("./src/images/js_wallpaper.jpeg",
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
			'Call Stack: <br> The stack is a data structure that follows the LIFO (last-in, first-out) principle. This means that the item that was most recently added to the stack will be the first to be removed. This is why it is also known as the "last-in first-out" or "LIFO" structure.',
			'Are you interested in learning JavaScript? Creating a simple calculator can help you evaluate its capabilities and gain a basic understanding of the JavaScript syntax and how it can be used to create interactive web applications.',
			'OOP: <br> Object-oriented programming is a programming paradigm that is based on the concepts of classes and objects. This approach allows programmers to organize their code into objects, which are usually referred to as classes.'
		],
		{
			tag: 'p',
			styles: {
				display: 'grid',
				'grid-auto-flow': 'column',
				'grid-column-gap': '25px',
				color: '#83531d',
				'font-size': '15px',
				'padding-inline': '40px',
			}
		}
	)
]