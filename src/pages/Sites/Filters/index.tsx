import { useContext, useState } from 'react'
import { Row, Col, Container, Button, Form, FormControl } from 'react-bootstrap'
import SitesContext from '../../../contexts/sites'
import ClientsContext from '../../../contexts/clients'

const SitesFilters = () => {
  const { dataList } = useContext(ClientsContext)
  const { setQuery, setPage, setClientId } = useContext(SitesContext)
  const [toggleSearch, setToggleSearch] = useState(false)

  const onChangeSearch = (e: any) => {
    setPage(0)
    setQuery(e.target.value)
  }

  const onChangeClient = (e: any) => {
    setPage(0)
    setQuery('')
    setClientId(e.target.value)
  }

  return (
    <>
      <Row>
        <Col className="text-center">
          <h1 className="my-2 h3">Sites</h1>
        </Col>
      </Row>
      <div className="bg-white border-bottom border-light">
        <Container>
          <Row className="d-flex justify-content-end py-1 align-items-center">
            <Col>
              {toggleSearch ? (
                <Form className="d-flex w-100">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    autoFocus
                    onChange={e => onChangeSearch(e)}
                  />
                </Form>
              ) : (
                <Form.Select
                  aria-label="Client filter"
                  className="w-50"
                  onChange={e => onChangeClient(e)}
                >
                  <option value="">All Sites</option>
                  {dataList?.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.givenName}
                    </option>
                  ))}
                </Form.Select>
              )}
            </Col>
            <Col
              xs="auto"
              className="d-flex align-items-center justify-content-end"
            >
              <i
                className="bi bi-filter link-dark"
                style={{ fontSize: '1.5rem' }}
              ></i>
              <Button
                variant="light"
                className="link-dark bg-white border-0"
                onClick={() => setToggleSearch(!toggleSearch)}
              >
                <i className="bi bi-search" style={{ fontSize: '1.5rem' }}></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SitesFilters
