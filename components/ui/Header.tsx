interface HeaderProps {
  title: string
  description?: string
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </header>
  )
}