import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Provider from './Provider';

interface BaseProps {
	children: React.ReactNode;
}

export default function Base({ children }: BaseProps) {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							lang
							title
							description
							url
							twitter
						}
					}
				}
			`}
			render={({
				site: {
					siteMetadata: { lang, title, description, url, twitter },
				},
			}) => (
				<>
					<Helmet title={title}>
						<html lang={lang} />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, shrink-to-fit=no"
						/>
						<meta name="description" content={description} />
						<meta property="og:type" content="website" />
						<meta property="og:title" content={title} />
						<meta property="og:site_name" content={title} />
						<meta property="og:url" content={url} />
						<meta property="og:description" content={description} />
						<meta name="twitter:creator" content={twitter} />
						<meta name="twitter:site" content="@iamsapegin" />
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta
							name="apple-mobile-web-app-status-bar-style"
							content="default"
						/>
						<link
							rel="icon"
							href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>"
						/>
					</Helmet>
					<Provider>{children}</Provider>
				</>
			)}
		/>
	);
}
