const TypingAnimation = () => {
    return( 
    <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-gray-700 animate-pulse from-gray-400 to-gray-600"></div>
        <div className="w-3 h-3 rounded-full bg-gray-700 animate-pulse from-gray-400 to-gray-600 delay-75"></div>
        <div className="w-3 h-3 rounded-full bg-gray-700 animate-pulse from-gray-400 to-gray-600 delay-150"></div>
    </div> 
    );
};  

export default TypingAnimation