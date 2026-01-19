import Link from "next/link";

export default async function UserDetails({ params }) {
    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: "no-store",
    });
    const user = await res.json();

    // User not found
    if (!user.id) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">User Not Found</h1>
                    <Link
                        href="/products"
                        className="inline-block text-blue-600 hover:underline"
                    >
                        ← Back to Users
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-500">@{user.username}</p>
                </div>

                {/* Contact */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h2>
                    <div className="text-gray-700 text-sm space-y-1">
                        <p><span className="font-medium">Email:</span> {user.email}</p>
                        <p><span className="font-medium">Phone:</span> {user.phone}</p>
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
                </section>

                {/* Address */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Address</h2>
                    <p className="text-gray-700 text-sm">
                        {user.address?.street}, {user.address?.suite}
                    </p>
                    <p className="text-gray-700 text-sm">
                        {user.address?.city}, {user.address?.zipcode}
                    </p>
                </section>

                {/* Company */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Company</h2>
                    <p className="text-gray-800 font-medium">{user.company?.name}</p>
                    <p className="text-gray-600 italic">“{user.company?.catchPhrase}”</p>
                    <p className="text-gray-600">{user.company?.bs}</p>
                </section>

                {/* Back Button */}
                <Link
                    href="/products"
                    className="inline-block text-blue-600 hover:underline mt-4"
                >
                    ← Back to Users
                </Link>
            </div>
        </main>
    );
}
