interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { message } = props

  return <div className="text-center text-soft-red font-medium py-4">⚠️ {message}</div>
}

export default ErrorMessage
