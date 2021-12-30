import { Container } from 'react-bootstrap'
import { ClientsProvider } from '../../../contexts/clients'
import Header from '../../molecules/Header'

interface HeaderProps {
  children: React.ReactNode
  header?: React.ReactNode
}

const AppLayout = ({ children, header }: HeaderProps) => {
  return (
    <ClientsProvider>
      <Header>{header}</Header>
      <Container>{children}</Container>
    </ClientsProvider>
  )
}

export default AppLayout
