import Link from "next/link";

export default async function Page() {
    // Fetch users from API
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store", // ensures fresh data each request
    });
    const users = await res.json();



    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
                User Directory
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {user.name}
                            </h2>
                            <p className="text-sm text-gray-500">@{user.username}</p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>
                                <span className="font-medium">Email:</span> {user.email}
                            </p>
                            <p>
                                <span className="font-medium">Phone:</span> {user.phone}
                            </p>
                            <p>
                                <span className="font-medium">Website:</span>{" "}
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    {user.website}
                                </a>
                            </p>
                        </div>

                        {/* Address */}
                        <div className="mt-4 text-sm text-gray-700">
                            <p className="font-medium">Address:</p>
                            <p>
                                {user.address.street}, {user.address.suite}
                            </p>
                            <p>
                                {user.address.city} - {user.address.zipcode}
                            </p>
                        </div>

                        {/* Company */}
                        <div className="mt-4 border-t pt-4">
                            <p className="text-sm font-semibold text-gray-800">
                                {user.company.name}
                            </p>
                            <p className="text-xs text-gray-600 italic">
                                “{user.company.catchPhrase}”
                            </p>
                        </div>

                        {/* Link to user detail page */}
                        <Link
                            href={`/products/${user.id}`}
                            className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                        >
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
