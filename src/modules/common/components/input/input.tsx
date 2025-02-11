'use client'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  className: string
  placeholder?: string
  type: string
  minLength?: number
  maxLength?: number
  onChange?: React.ChangeEventHandler
}

export default function Input({
  value,
  className,
  placeholder,
  type,
  minLength,
  maxLength,
  onChange,
  ...props
}: Props) {

  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      {...props}
    />
  )
}