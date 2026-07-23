## 1. Datenmodell

### 1.1 Zentrale Entitäten

Product

* id
* category_id
* name
* slug
* short_description
* long_description
* brand
* origin
* package_size
* price
* price_visible
* availability_status
* is_bestseller
* is_featured
* target_group
* status
* sort_order
* created_at
* updated_at

Category

* id
* parent_id
* name
* slug
* description
* image
* status
* sort_order
* created_at
* updated_at

ProductImage

* id
* product_id
* file_path
* alt_text
* sort_order
* is_primary

ContactInquiry

* id
* inquiry_type
* name
* company
* email
* phone
* message
* privacy_accepted_at
* status
* created_at

BusinessInquiry

* id
* company
* contact_name
* email
* phone
* requested_products
* estimated_quantity
* preferred_contact_method
* status
* created_at

OpeningHour

* id
* weekday
* opening_time
* closing_time
* is_closed

SpecialOpeningHour

* id
* date
* opening_time
* closing_time
* is_closed
* note

SiteSetting

* key
* value
* type
* updated_at

Beispiele:

* company_name
* phone
* email
* address
* instagram_url
* facebook_url
* catalog_notice

AdminUser

* id
* name
* email
* password_hash
* role
* last_login_at
* status

### 1.2 Spätere Entitäten

* Reservation
* ReservationItem
* NewsletterSubscriber
* Customer
* CustomerAddress
* Order
* OrderItem
* PriceList
* CustomerPrice
* DeliveryArea