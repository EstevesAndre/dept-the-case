
import { Helmet } from 'react-helmet'

export const Head = ({ title = '', description = '' }) => {
  const defaultTitle = "Dept the case"
  return (
    <Helmet
      title={title ? `${title} | ${defaultTitle}` : undefined}
      defaultTitle={defaultTitle}
    >
      <meta name='description' content={description} />
    </Helmet>
  )
}