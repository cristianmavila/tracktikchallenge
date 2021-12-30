import { useContext, useEffect } from 'react'
import { Carousel, Col, Ratio, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import defaultUserImage from '../../../assets/images/placeholder-image.png'
import SitesContext from '../../../contexts/sites'

const SiteDetailBody = () => {
  const { id } = useParams()
  const { detail, fetchDetail, loading } = useContext(SitesContext)

  useEffect(() => {
    fetchDetail(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      {loading ? (
        <div className="my-2">
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-1"
          />
          Loading...
        </div>
      ) : (
        <>
          {detail.images && (
            <Carousel>
              {detail.images.map((item, key) => (
                <Carousel.Item key={key}>
                  <Ratio aspectRatio="16x9">
                    <img
                      onError={e => {
                        e.currentTarget.src = defaultUserImage
                      }}
                      src={item}
                      alt={item}
                      style={{ objectFit: 'cover' }}
                    />
                  </Ratio>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <Row className="my-4 align-items-center">
            <Col xs="auto">
              <i className="bi bi-person-fill" style={{ fontSize: '2rem' }}></i>
            </Col>
            <Col>
              {detail?.contacts?.main?.firstName}
              <br />
              {detail?.contacts?.main?.jobTitle}
            </Col>
          </Row>
          <Row className="my-4 align-items-center">
            <Col xs="auto">
              <i
                className="bi bi-telephone-fill"
                style={{ fontSize: '2rem' }}
              ></i>
            </Col>
            <Col>{detail?.contacts?.main?.phoneNumber}</Col>
          </Row>
          <Row className="my-4 align-items-center">
            <Col xs="auto">
              <i
                className="bi bi-envelope-fill"
                style={{ fontSize: '2rem' }}
              ></i>
            </Col>
            <Col>{detail?.contacts?.main?.email}</Col>
          </Row>
          <Row className="my-4 align-items-center">
            <Col xs="auto">
              <i
                className="bi bi-geo-alt-fill"
                style={{ fontSize: '2rem' }}
              ></i>
            </Col>
            <Col>
              {detail?.address?.street}, {detail?.address?.city}
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default SiteDetailBody
