import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileContext from '../../../contexts/profile'
import defaultUserImage from '../../../assets/images/user-profile.svg'

const ProfileHeader = () => {
  const { username, avatar, givenName } = useContext(ProfileContext)
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs="auto">
          {avatar ? (
            <img
              className="rounded-circle"
              width={35}
              height={35}
              onError={e => {
                e.currentTarget.src = defaultUserImage
              }}
              src={avatar}
              alt={username}
            />
          ) : (
            username
          )}
        </Col>
        <Col className="py-3">
          <h1 className="h4">{givenName}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileHeader
