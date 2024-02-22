import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full border-t border-ui-border-base">
      <div className="flex flex-col w-full h-auto">
        <div className="flex flex-col gap-y-6 justify-between items-start py-40 xsmall:flex-row">
          <div>
            <LocalizedClientLink
              href="/"
              className="uppercase txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base"
            >
              AbataCrafts by Sally
            </LocalizedClientLink>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-x-16 text-small-regular">
              {collections && collections.length > 0 && (
                <div className="flex flex-col gap-y-2">
                  <span className="txt-small-plus txt-ui-fg-base">
                    Collections
                  </span>
                  <ul
                    className={clx(
                      "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                      {
                        "grid-cols-2": (collections?.length || 0) > 3,
                      }
                    )}
                  >
                    {collections?.slice(0, 6).map((c) => (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-ui-fg-base"
                          href={`/collections/${c.handle}`}
                        >
                          {c.title}
                        </LocalizedClientLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-y-2"></div>
          </div>
        </div>
        <div className="flex justify-between mb-16 w-full text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} AbataCrafts. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
