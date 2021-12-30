import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import AppLayout from '../../components/template/AppLayout'
import ProfileContext from '../../contexts/profile'
import ProfileHeader from './ProfileHeader'

const Profile = () => {
  const { username, email } = useContext(ProfileContext)

  return (
    <AppLayout header={<ProfileHeader />}>
      <Row className="my-4 align-items-center">
        <Col xs="auto">
          <i className="bi bi-person-fill" style={{ fontSize: '2rem' }}></i>
        </Col>
        <Col>{username}</Col>
      </Row>
      <Row className="my-4 align-items-center">
        <Col xs="auto">
          <i className="bi bi-envelope-fill" style={{ fontSize: '2rem' }}></i>
        </Col>
        <Col>{email}</Col>
      </Row>
    </AppLayout>
  )
}

export default Profile
