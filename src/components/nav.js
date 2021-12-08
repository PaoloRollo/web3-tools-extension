import { FingerPrintIcon, TerminalIcon, CalculatorIcon, ViewGridIcon, CreditCardIcon, HeartIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = ({ onClick }) => {
    const navigation = [
        { name: 'Unit converter', icon: CalculatorIcon, current: false },
        { name: 'Hashing', icon: FingerPrintIcon, current: false },
        { name: 'Wallet', icon: CreditCardIcon, current: false },
        { name: 'Block calculator', icon: ViewGridIcon, current: false },
        { name: 'Encoder', icon: TerminalIcon, current: false },
        { name: 'Favorites', icon: HeartIcon, current: false },
    ]

  return (
    <nav className="space-y-1 mt-4" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer'
          )}
          aria-current={item.current ? 'page' : undefined}
          onClick={() => onClick && onClick(item)}
        >
          <item.icon
            className={classNames(
              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav;