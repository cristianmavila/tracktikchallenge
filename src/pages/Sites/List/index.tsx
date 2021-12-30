import { useContext, useEffect } from 'react'
import { Row, Col, Card, Spinner, Alert } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import SitesContext from '../../../contexts/sites'
import defaultUserImage from '../../../assets/images/placeholder-image.png'

const SitesList = () => {
  const {
    fetchSites,
    setPage,
    loading,
    data,
    pageCount,
    query,
    page,
    clientId,
  } = useContext(SitesContext)

  useEffect(() => {
    fetchSites(Number(page + 1), 10, query, clientId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page, clientId])

  const handlePageClick = (page: any) => {
    setPage(page.selected)
  }

  return (
    <>
      {loading && (
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
      )}

      {data.length === 0 && !loading && (
        <Alert variant="warning" className="my-5">
          No results to show!
        </Alert>
      )}

      {data?.map(item => (
        <Card key={item.id} className="rounded-0 border-top-0">
          <Link to={`/site/${item.id}`} className="link-dark">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="auto">
                  {item?.images?.[0] ? (
                    <img
                      onError={e => {
                        e.currentTarget.src = defaultUserImage
                      }}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-circle"
                      src={item?.images?.[0]}
                      loading="lazy"
                    />
                  ) : null}
                </Col>
                <Col>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item?.address?.street}, {item?.address?.city} -{' '}
                    {item?.address?.country} <br />
                    {item?.contacts?.main?.firstName}
                  </Card.Text>
                </Col>
                <Col xs="auto">
                  <i
                    className="bi bi-chevron-right"
                    style={{ fontSize: '2rem' }}
                  ></i>
                </Col>
              </Row>
            </Card.Body>
          </Link>
        </Card>
      ))}

      {!loading && data.length > 0 && (
        <Row className="justify-content-center mt-5 mb-5">
          <Col>
            <ReactPaginate
              previousLabel={'«'}
              nextLabel={'»'}
              previousLinkClassName="page-link"
              nextClassName="page-link"
              containerClassName="pagination justify-content-center"
              pageLinkClassName="page-link"
              pageClassName="page-item"
              activeClassName="active"
              disabledClassName="disabled"
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              forcePage={page}
              onPageChange={handlePageClick}
            />
          </Col>
        </Row>
      )}
    </>
  )
}

export default SitesList
