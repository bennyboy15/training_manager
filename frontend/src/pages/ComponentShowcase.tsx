import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Input,
  LoadingSpinner,
  Modal,
  Pagination,
  SearchInput,
  Select,
  SortableTable,
  Textarea
} from "../components";

function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  // Sample data for SortableTable
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Developer", status: "Active" },
  ];

  const tableColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}>
          {value}
        </span>
      )
    },
  ];

  const selectOptions = [
    { value: "", label: "Select an option..." },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Component Showcase</h1>
        <p className="text-gray-600">A comprehensive demo of all available UI components</p>
      </div>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Buttons</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Components Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Form Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium">Input</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Basic Input"
                placeholder="Enter some text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Input with Error"
                placeholder="This has an error"
                error="This field is required"
              />
              <Input
                label="Input with Helper Text"
                placeholder="Enter your name"
                helperText="This is some helpful information"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium">Select</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select
                label="Choose an option"
                options={selectOptions}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              />
              <Select
                label="Select with Error"
                options={selectOptions}
                error="Please select an option"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium">Textarea</h3>
            </CardHeader>
            <CardContent>
              <Textarea
                label="Description"
                placeholder="Enter a description..."
                rows={4}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium">Search Input</h3>
            </CardHeader>
            <CardContent>
              <SearchInput
                placeholder="Search for something..."
                value={searchValue}
                onChange={setSearchValue}
                onClear={() => setSearchValue("")}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium">Default Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">This is a basic card with default styling.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-medium">Elevated Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">This card has an elevated shadow effect.</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h3 className="text-lg font-medium">Outlined Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">This card has a prominent outline border.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alerts Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Alerts</h2>
        <div className="space-y-4">
          <Alert variant="success" title="Success!">
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="error" title="Error!">
            Something went wrong. Please try again.
          </Alert>
          <Alert variant="warning" title="Warning!">
            This action cannot be undone.
          </Alert>
          <Alert variant="info">
            Here's some important information you should know.
          </Alert>
        </div>
      </section>

      {/* Data Display Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Display</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Sortable Table</h3>
          <Card>
            <CardContent className="p-0">
              <SortableTable
                data={tableData}
                columns={tableColumns}
                rowKey="id"
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Pagination</h3>
          <Card>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-600 mb-4">Current Page: {currentPage}</p>
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Modal</h2>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Click the button below to open a modal dialog.</p>
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            </div>
          </CardContent>
        </Card>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              This is an example modal dialog. You can put any content here.
            </p>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </section>

      {/* Loading Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Loading States</h2>
        <Card>
          <CardContent>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <LoadingSpinner size="sm" />
                <p className="text-sm text-gray-600 mt-2">Small</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" />
                <p className="text-sm text-gray-600 mt-2">Medium</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="lg" />
                <p className="text-sm text-gray-600 mt-2">Large</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default ComponentShowcase;