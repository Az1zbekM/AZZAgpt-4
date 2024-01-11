import ChatGPT from "@/components/shared/chatgpt";
import { Toaster } from "@/components/ui/toaster";

const RootPage = () => {
    return (
			<div className='h-full p-0 space-y-2 w-full bg-primary-foreground overflow-y-auto custom-scrollbar'>
				<ChatGPT />
				<Toaster />
			</div>
		)
}
 
export default RootPage;