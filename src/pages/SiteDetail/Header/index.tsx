import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SitesContext from '../../../contexts/sites'
import defaultUserImage from '../../../assets/images/placeholder-image.png'

const SiteDetailHeader = () => {
  const { detail, loading } = useContext(SitesContext)
  return (
    <Container>
      {!loading && (
        <>
          <Row className="align-items-center">
            <Col xs="auto">
              <Link to="/sites" className="link-light">
                <i
                  className="bi bi-chevron-left"
                  style={{ fontSize: '2rem' }}
                ></i>
              </Link>
            </Col>
            <Col xs="auto">
              {detail?.images?.[0] ? (
                <img
                  onError={e => {
                    e.currentTarget.src = defaultUserImage
                  }}
                  alt={detail.title}
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={detail?.images?.[0]}
                  loading="lazy"
                />
              ) : null}
            </Col>
            <Col className="py-3">
              <h1 className="h4">{detail.title}</h1>
              {detail?.address?.street}, {detail?.address?.city} -{' '}
              {detail?.address?.country} <br />
              {detail?.contacts?.main?.firstName}{' '}
              {detail?.contacts?.main?.lastName}
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default SiteDetailHeader
