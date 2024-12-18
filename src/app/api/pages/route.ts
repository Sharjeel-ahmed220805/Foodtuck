import { pages } from "../../data/data";

export async function GET() {
    return Response.json(pages);
}