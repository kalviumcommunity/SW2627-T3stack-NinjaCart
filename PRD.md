NinjaCart — Product Requirements Document (PRD)

1. Product Overview

NinjaCart is a web-based produce marketplace that connects farmers directly with retailers.

Farmers can create listings for their available produce by providing product information, images, pricing, descriptions, and quantity. Retailers can browse the available listings and purchase produce through the platform.

The system will automatically update farmer inventory when an order is placed. When the available quantity of a listing reaches zero, the listing will be removed from the marketplace.

2. Problem Statement

Ninjacart wants a produce listing system where:

Farmers can add produce items with images.
Retailers can browse a paginated catalogue of available produce.
Retailers can place orders for listed produce.
A farmer's inventory decreases immediately after an order is placed.
A listing is removed when its available quantity reaches zero. 3. Goals

The primary goals of NinjaCart are to:

Provide a simple platform for farmers to list their produce.
Allow retailers to easily discover available produce.
Provide separate experiences for farmers and retailers.
Allow retailers to purchase multiple products in a single order.
Maintain accurate product inventory.
Automatically remove unavailable listings.
Provide secure authentication and role-based access.
Provide a clean and responsive user interface. 4. User Roles

NinjaCart will have two primary user roles.

4.1 Farmer

Farmers are responsible for creating and managing produce listings.

Farmers should be able to:

Create an account.
Log in and log out.
Create produce listings.
Upload a product image.
Enter the product name.
Select/enter the product type.
Set the product price.
Add a description.
Specify the available quantity.
View their listings.
Manage their available inventory.
4.2 Retailer

Retailers are responsible for browsing and purchasing produce.

Retailers should be able to:

Create an account.
Log in and log out.
Browse available produce.
View product information.
Add multiple products to an order/cart.
Specify quantities.
Place an order.
View their orders. 5. Authentication

The application will provide authentication using Better Auth.

The initial flow is:

Landing Page
↓
Login / Signup
↓
Select / Determine Role
↓
┌─────────────┐
│ │
Farmer Retailer
│ │
↓ ↓
Farmer Retailer
Dashboard Experience

Authentication will support:

Signup
Login
Logout
Session management
Farmer/Retailer roles

Better Auth will use Prisma as its database adapter and PostgreSQL through Neon.

6. Landing Page

The landing page will introduce NinjaCart and direct users into the application.

Required sections
Navbar

The navbar should contain:

NinjaCart branding
Home
How It Works
Login
Signup
Hero Section

The hero section should communicate the main purpose of the platform.

Example:

From Farm to Retail, Made Simple.

Supporting text:

Connect farmers and retailers through a simple marketplace.

Primary actions:

Get Started
Learn More
How It Works

The section will explain the basic marketplace flow:

Farmer Lists
↓
Retailer Discovers
↓
Retailer Orders
Farmer Section

Explain how farmers can:

List produce
Upload images
Set prices
Specify quantity
Retailer Section

Explain how retailers can:

Browse produce
View listings
Select products
Place orders
Call to Action

Encourage users to create an account and start using the platform.

Footer

The footer will contain:

NinjaCart branding
Quick links
Farmer-related links
Retailer-related links
Support links 7. Farmer Product Listing

A farmer will have access to a List Product functionality.

Clicking the button will open a product submission page/form.

The form must contain:

Field Description
Product Image Image of the produce
Product Name Name of the produce
Product Type Type/category of produce
Price Price per unit
Description Description of the product
Quantity Number of available units

The farmer submits the form using a Post button.

After successful submission:

Form
↓
Validation
↓
Create Product
↓
Product appears in marketplace 8. Product Listings

Each product listing should contain at minimum:

Product image
Product name
Product type
Price
Description
Available quantity
Farmer information where appropriate

A product is considered available while:

quantity > 0 9. Retailer Catalogue

Retailers will have access to a catalogue containing available product listings.

The catalogue should:

Display available products.
Allow retailers to view product details.
Support pagination.
Prevent products with zero available quantity from appearing.

Conceptually:

Page 1
Products 1–10

Page 2
Products 11–20

Page 3
Products 21–30

Pagination will be handled through database queries rather than stored as product data.

10. Orders

A retailer should be able to purchase multiple different products in one order.

For example:

Order #123

Tomatoes × 10
Potatoes × 20
Onions × 5

Total: ₹1,200

The order will contain multiple order items.

Order

An order belongs to one retailer and contains one or more order items.

Order Item

Each order item represents a product purchased as part of an order.

It should store:

Product reference where available
Product name at purchase
Quantity purchased
Price at purchase
Subtotal

The product information is preserved in the order item so that order history remains available even after a product listing is deleted.

11. Inventory Management

Inventory must be updated immediately when an order is successfully placed.

Example:

Available quantity = 100

Retailer purchases = 20

New quantity = 80

If the retailer requests more than the available quantity:

Available = 5
Requested = 10

→ Order rejected
→ Inventory unchanged

Inventory updates must be performed safely so that multiple simultaneous purchases cannot cause incorrect inventory values.

12. Product Deletion

When a product's quantity reaches zero:

quantity = 0
↓
Product listing deleted
↓
No longer appears in catalogue

However, historical order information must remain available.

Therefore, OrderItem stores a snapshot of important product information such as:

Product name
Price at purchase
Quantity
Subtotal

This allows the original product listing to be deleted without destroying order history.

13. Database Design

The application will use:

Next.js
↓
Prisma
↓
PostgreSQL
↓
Neon

The database will contain the Better Auth models as well as NinjaCart-specific models.

Better Auth
User
Session
Account
Verification
NinjaCart
Product
Order
OrderItem
13.1 User

A user represents either a farmer or retailer.

Important fields include:

id
name
email
role
createdAt
updatedAt

The role can be:

FARMER
RETAILER
13.2 Product

A product represents a farmer's marketplace listing.

Conceptually:

Product
├── id
├── name
├── type
├── price
├── description
├── quantity
├── imageUrl
├── farmerId
├── createdAt
└── updatedAt

Relationship:

Farmer 1 ─────── \* Products
13.3 Order

An order represents a retailer's purchase.

Conceptually:

Order
├── id
├── retailerId
├── totalPrice
├── createdAt
└── updatedAt

Relationship:

Retailer 1 ─────── \* Orders
13.4 OrderItem

An order item represents one product within an order.

Conceptually:

OrderItem
├── id
├── orderId
├── productId
├── productName
├── priceAtPurchase
├── quantity
├── subtotal
└── createdAt

Relationship:

Order 1 ─────── \* OrderItems 14. Core Database Relationships

The overall relationship is:

                         User
                       /      \
                      /        \
                 Farmer       Retailer
                   |             |
                   |             |
                   ↓             ↓
                Product        Order
                   ↑             |
                   |             |
                   └── OrderItem ┘

More specifically:

Farmer
│
└── Product[]

Retailer
│
└── Order[]
│
└── OrderItem[]
│
└── Product 15. Technology Stack

The current planned stack is:

Frontend
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Authentication
Better Auth
ORM
Prisma
Database
PostgreSQL
Neon as the hosted PostgreSQL provider
Icons/UI
Lucide React
shadcn/ui components 16. Application Flow
New User
Landing Page
↓
Signup
↓
Authentication
↓
Select Role
↓
┌─────────────┐
│ │
Farmer Retailer
Farmer
Farmer Dashboard
↓
List Product
↓
Product Form
↓
Submit
↓
Product Listing Created
↓
Available to Retailers
Retailer
Retailer Dashboard
↓
Browse Products
↓
View Listings
↓
Select Products
↓
Create Order
↓
Inventory Updated
↓
Products reaching 0 are deleted 17. Non-Functional Requirements
Security
Authentication must be handled securely.
Passwords must not be stored in plain text.
Database credentials must never be committed to GitHub.
Role-based access should prevent users from accessing functionality intended for the other role.
Performance
Product catalogue should use pagination.
Database queries should retrieve only the required products.
Images should not be stored directly inside PostgreSQL.
Usability
The interface should be responsive.
The farmer and retailer flows should be simple and easy to understand.
Forms should provide appropriate validation and feedback.
Maintainability
Reusable UI components should be used where appropriate.
Features should be separated logically.
Database relationships should be clearly defined.
Code should follow the agreed project structure. 18. Initial Project Structure

The project will generally follow:

src/
├── app/
│ ├── page.tsx
│ ├── layout.tsx
│ │
│ ├── login/
│ │ └── page.tsx
│ │
│ ├── signup/
│ │ └── page.tsx
│ │
│ ├── farmer/
│ │ └── ...
│ │
│ └── retailer/
│ └── ...
│
├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ │
│ ├── landing/
│ │ └── ...
│ │
│ └── ui/
│ └── ...
│
├── lib/
│ ├── auth.ts
│ └── ...
│
└── generated/
└── prisma/

prisma/
├── schema.prisma
└── migrations/ 19. Team Responsibilities

Based on the team's current assignment:

Team Member Responsibility
Mayank Khabya Landing page
Yuvraj Authentication — Login, Signup, Logout
Pranav Sharma Farmer-side functionality

These responsibilities may expand as development progresses.

20. Current Development Status
    Completed
    Next.js project setup
    TypeScript
    Tailwind CSS
    shadcn/ui
    Prisma
    Neon PostgreSQL
    Better Auth setup
    Better Auth Prisma schema
    NinjaCart database schema
    Initial database migration
    GitHub repository
    Protected main branch
    Landing page initial implementation
    In Progress
    Landing page refinement
    Authentication implementation
    Farmer product listing
    Retailer catalogue
    Product purchasing
    Order management
    Inventory updates
    Future
    Image upload/storage
    Complete role-based routing
    Comprehensive validation
    Testing
    Deployment
    Production polish
21. MVP Scope

For the initial MVP, the application must successfully support:

1. User Signup/Login
   ↓
2. Farmer/Retailer role
   ↓
3. Farmer creates listing
   ↓
4. Retailer sees listing
   ↓
5. Retailer purchases product(s)
   ↓
6. Inventory decreases
   ↓
7. Product is deleted at quantity = 0

Anything beyond this should be treated as an enhancement rather than a blocker for the initial prototype.

22. Success Criteria

NinjaCart's MVP will be considered successful when:

A farmer can authenticate and create a product listing.
Product listings appear in the retailer catalogue.
A retailer can purchase one or more products in an order.
The correct quantities are deducted from inventory.
Orders cannot exceed available inventory.
Products reaching zero quantity are removed from the catalogue.
Historical order information remains accessible.
Authentication and role-based access work correctly.
The application is usable on desktop and mobile layouts.
For your GitHub PR
