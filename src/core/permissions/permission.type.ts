import CreatePermission from "../enums/create.permission.enum";
import DeletePermission from "../enums/delete.permission.enum";

const Permission = {
    ...CreatePermission,
    ...DeletePermission,
}

type Permission = CreatePermission | DeletePermission;

export default Permission;