const Background = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-blue-gray to-purple">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-pink via-light-blue to-blue-gray opacity-70 blur-2xl"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-light-blue rounded-full opacity-50 blur-3xl"></div>
    </div>
  )
}

export default Background