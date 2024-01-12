'use client'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import TypingAnimation from '@/components/shared/typing-animation'
import { Send } from 'lucide-react'

export default function Home() {
	const { toast } = useToast()
	const [inputValue, setInputValue] = useState('')
	const [chatHistory, setChatHistory] = useState<
		{ type: string; message: string }[]
	>([])
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (!inputValue) {
			toast({ title: 'Please enter a message !!!', })
			return;
		}

		setChatHistory(prevChatLog => [
			...prevChatLog,
			{ type: 'user', message: inputValue },
		])

		sendMessage(inputValue)
		setInputValue('')
	}

	const sendMessage = (message: string) => {
		const url = 'https://api.openai.com/v1/chat/completions'
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
		}

		const data = {
			model: 'gpt-3.5-turbo-1106',
			messages: [
				{ role: 'user', content: message },
				// 				{
				// 					role: 'system',
				// 					content: `Meet the Jokester Bot, your go-to companion for hilarious and famous jokes! With its advanced GPT technology, this bot is programmed to deliver the most side-splitting jokes that will leave you rolling on the floor laughing.But here's the best part: the Jokester Bot doesn't stop at just giving you a funny response. It goes the extra mile to ensure a memorable user experience. After each response, it surprises you with an additional joke, making sure you're entertained to the fullest.
				// Whether you're in need of a good laugh or want to impress your friends with the wittiest jokes, the Jokester Bot has got you covered. Get ready to embark on a laughter-filled adventure with this joker bot and enjoy an endless stream of amusing and famous jokes that will keep you entertained for hours!. Most importan thing is that you don't stop and do jokes only after response, for example when user need some informational help from you, you give information first and then joke.`,
				// 				},
			],
			max_tokens: Infinity,
			temperature: 0.9,
		}
		setIsLoading(true)

		axios
			.post(url, data, { headers })
			.then(res => {
				const botMessage =
					res.data.choices && res.data.choices.length > 0
						? res.data.choices[0].message.content.replace(/\n/g, '\n')
						: 'Model response unavailable'

				setChatHistory(prevChatLog => [
					...prevChatLog,
					{ type: 'bot', message: botMessage },
				])
			})
			.catch(err => {
				console.log(err)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<div className='container  max-w-[820px] pb-80'>
			<div className='flex flex-col h-full bg-primary-foreground'>
				<div className='flex-grow p-4'>
					<div className='flex flex-col space-y-4'>
						{chatHistory.map((message, index) => (
							<div
								className={`flex ${
									message.type === 'user' ? 'justify-end' : 'justify-start'
								}`}
								key={index}
							>
								<div
									className={`${
										message.type === 'user' ? 'bg-blue-600' : 'bg-gray-700'
									} p-2 px-4 rounded-lg max-w-sm text-pretty-white break-words `}
								>
									{message.message}
								</div>
							</div>
						))}
						{isLoading ? <TypingAnimation /> : null}
					</div>
				</div>
						
				<form
					style={{ width: '50%' }}
					className='flex-none p-5 fixed bottom-0 bg-primary-foreground'
					onSubmit={handleSubmit}
				>
					<div className='flex rounded-lg border border-gray-600 bg-[#262626] '>
						<input
							spellCheck={false}
							type='text'
							placeholder='Type your message...'
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							className='flex-grow bg-[#262626] p-2 px-4 text-white outline-none '
						/>
						<button
							className='break-words bg-primary-foreground p-2 px-4 text-white font-semibold rounded-lg'
							type='submit'
							disabled={isLoading}
						>
							<Send />
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
